// 趣头条
"auto";
console.show();
let round = Math.round;
let click_count = 0;
//请求截图
if (!requestScreenCapture()) {
    console.log("请求截图失败,停止脚本");
    exit();
}
home();
sleep(1000);
// 打开趣头条
//   看新闻
//                         有可能有突发性新闻,弹窗                   打开的是文字
//                                                                 打开的是视频
// 返回


// 第一步
// 打开趣头条
let APP_NAME = "趣头条";
let PACKAGE_NAME = "com.jifen.qukan";
let WIDTH = device.width;
let HEIGHT = device.height;
let CNT = 20;
let VIDEO_LENGTH = 180000;


String.prototype.format = function () {
    var resultStr = this.toString();
    // 参数为对象
    if (typeof arguments[0] === "object") {
        for (var i in arguments[0]) {
            resultStr = resultStr.replace("{" + i + "}", arguments[0][i]);
        }
    }
    // 多个参数
    else {
        for (var i = 0; i < arguments.length; i++) {
            resultStr = resultStr.replace("{" + i + "}", arguments[i]);
        }
    }
    return resultStr;
};





function open_qutoutiao(app_name, time_length) {
    let t = time_length || 1000;
    app.launchApp(app_name);
    sleep(t);
}



//检查突发窗口,并打开浏览,之后返回主页
function has_popup() {
    if (id('n5').text('要闻推送').exists()) {
        console.log('要闻推送')
        return true;
    } else {
        return false;
    }
}
//查看弹窗内容
function view_popup() {
    console.log('出现**弹窗')
    //点击查看详情
    id('n4').text('查看详情').findOnce().click();
    sleep(1000);
    if (currentActivity() == "com.jifen.qukan.view.activity.NewsDetailActivity") {
        lookat_news();
    } else if (currentActivity() == "com.jifen.qukan.view.activity.VideoNewsDetailActivity") {
        watch_video();
    } else {
        console.log('点击弹窗后未发现新闻或者视频,停止脚本');
        exit();
    }
    sleep(1000);
}

function look_news_or_video() {
    if (currentActivity() == "com.jifen.qukan.view.activity.NewsDetailActivity") {
        lookat_news();
        click_count=0;
    } else if (currentActivity() == "com.jifen.qukan.view.activity.VideoNewsDetailActivity") {
        watch_video();
        click_count=0;
    } else {
        console.log('没有发现新闻或者视频,本次点击页面异常,请检查点击指令,来自look_news_or_video');
        // exit();
    }
}


function lookat_news() {
    let n = 0;
    rnd_swipe();
    while (true) {
        console.log('开始看新闻');
        // desc = 展开查看全文 ▾
        if (desc('展开查看全文 ▾').exists() && desc('展开查看全文 ▾').boundsInside(0, 0, WIDTH, round(HEIGHT / 3))) {
            console.log('发现**展开查看全文**');
            sleep(2000);
            let click_is_ok = desc('展开查看全文 ▾').findOnce().click();
            if (click_is_ok) {
                console.log('已点击**展开查看全文')
            } else {
                console.log('点击展开查看全文失败,停止脚本');
                exit();
            }
            sleep(1000);
        }

        rnd_swipe();
        n++;

        // 判断文章读完了
        // desc = 本文及配图均为趣头条自媒体用户上传，不代表平台观点。
        desc('本文及配图均为趣头条自媒体用户上传，不代表平台观点。').boundsInside(0, 0, WIDTH, HEIGHT / 3 * 2).findOnce();
        if (desc('本文及配图均为趣头条自媒体用户上传，不代表平台观点。').exists() && desc('本文及配图均为趣头条自媒体用户上传，不代表平台观点。').boundsInside(0, 0, WIDTH, HEIGHT / 3).findOnce()) {
            console.log('发现**本文及配图均为趣头条自媒体用户上传，不代表平台观点。**');
            sleep(2000);
            back();
            console.log('从新闻页面返回主页')
            sleep(2000);
            return;
        }



        if (n > CNT) {
            console.log('看新闻,向上滑动超过{0}次,停止脚本'.format(CNT));
            exit();
        }
    }
}



function watch_video() {
    console.log('开始看视频...')
    // colors.equals(color1, color2)
    // let VIDEO_LENGTH = 180000
    let old_pic = '/sdcard/old.png';
    let new_pic = '/sdcard/new.png';
    let timestamp_start = new Date().getTime();
    let timestamp_end = new Date().getTime();
    while (true) {
        captureScreen(old_pic);
        sleep(2000);
        captureScreen(new_pic);
        sleep(500);
        let img_data1 = get_four_pixel(old_pic);
        let img_data2 = get_four_pixel(new_pic);
        if (img_data1 == img_data2) {
            //两张截图内容一样,视频已停止播放.
            console.log('视频停止播放')
            back();
            console.log('从视频页面返回主页')
            sleep(500);
            return true;
        } else {
            console.log('视频播放中')
        }
        sleep(1000);
        timestamp_end = new Date().getTime();
        if (timestamp_end - timestamp_start > VIDEO_LENGTH) {
            console.log("等待视频超过3分钟,停止脚本");
            exit();
        }


    }

}



function get_four_pixel(img_path) {
    let img = images.read(img_path);
    let x, y, col1, col2, col3, col4;
    x = round(WIDTH / 2);
    y = round(HEIGHT / 3 / 3);
    col1 = img.pixel(x, y);
    x = round(WIDTH / 2);
    y = round(HEIGHT / 3 / 3) * 2;
    col2 = img.pixel(x, y);
    x = round(WIDTH / 3) * 2;
    y = round(HEIGHT / 3 / 3) * 2;
    col3 = img.pixel(x, y);
    x = round(WIDTH / 3) * 2;
    y = round(HEIGHT / 3 / 3);
    col4 = img.pixel(x, y);
    let s = ''
    s = ''.concat(colors.toString(col1), colors.toString(col2), colors.toString(col3), colors.toString(col4));
    return s
}

function rnd_swipe() {
    let min = -20;
    let max = 20;
    let rnd = 0;
    let duration = 666;
    rnd = random(min, max);
    let x1 = round(WIDTH / 2) + rnd;
    rnd = random(min, max);
    let y1 = round(HEIGHT / 3) * 2 + rnd;
    rnd = random(min, max);
    let x2 = round(WIDTH / 2) + rnd;
    rnd = random(min, max);
    let y2 = round(HEIGHT / 3) + rnd;
    rnd = random(500, 1200);
    duration = rnd;
    swipe(x1, y1, x2, y2, duration);
    console.log('已经滑动');
    sleep(1000);
}
//判断是不是在主页,所有的操作都以主页为起点,
//主页当前活动com.jifen.qukan.view.activity.MainActivity
//文字帖子活动:com.jifen.qukan.view.activity.NewsDetailActivity
//视频帖子活动com.jifen.qukan.view.activity.VideoNewsDetailActivity

function is_main_page() {
    waitForPackage("com.jifen.qukan");
    // console.log('package_name={0}'.format(package_name));
    //主页当前活动com.jifen.qukan.view.activity.MainActivity
    sleep(1000);
    // if (package_name == PACKAGE_NAME) {
    //     console.log("现在是主页");
    //     return true;
    // } else {
    //     console.log("现在不是主页");
    //     //震动两秒
    //     device.vibrate(2000);
    //     return false;
    // }
}

function rnd_click() {
    let x, y, min, max
    // rnd = random(min, max);
    min = round(WIDTH / 3);
    max = round(WIDTH / 3) * 2;
    x = random(min, max);
    min = round(HEIGHT / 3);
    max = round(HEIGHT / 2);
    y = random(min, max);
    click(x, y);
    console.log('已经点击页面')
    sleep(1000);
}

function rnd_refresh_time() {
    let min = 10 * 60 * 1000;
    let max = 20 * 60 * 1000;
    return random(min, max);
}

function refresh() {
    if (desc('刷新').exists()) {
        let click_is_ok = desc('刷新').findOnce().click();
        if (click_is_ok) {
            sleep(500);
        } else {
            console.log('点击刷新失败,停止脚本');
            exit();
        }
    }
}

function advertisement() {
    let y1, y2
    y1 = round(WIDTH / 3);
    y2 = round(WIDTH / 3) * 2;

    while (text('推广').exists() && text('推广').boundsInside(0, y1, WIDTH, y2)) {
        console.log('广告');
        rnd_swipe();

    }
}

function main() {

    let refresh_time = rnd_refresh_time();
    open_qutoutiao(APP_NAME);
    let timestamp_start = new Date().getTime();
    while (true) {
        is_main_page();
        if (has_popup()) {
            view_popup();
        }

        advertisement();
        if (text('推广').exists()) {
            console.log('广告');
            rnd_swipe();
        } else {
            console.log('这一页没有推广广告');
        }
        rnd_swipe();

        //点击新闻或者视频
        rnd_click();
        click_count++;
        sleep(1000);

        if (currentActivity() == "com.jifen.qukan.view.activity.NewsDetailActivity") {
            console.log('点击后发现**新闻');
        } else if (currentActivity() == "com.jifen.qukan.view.activity.VideoNewsDetailActivity") {
            console.log('点击后发现**视频');
        } else {
            console.log('点击后啥也没有');
        }
        look_news_or_video();
        console.log('新闻或者视频,观看完毕,开始下一轮')
        // console.log('点击无效,尝试重复点击第{0}次'.format(click_count));
        if (click_count > 10) {
            console.log('点击超过10次,无有效点击,脚本停止');
            exit();
        }
        let timestamp_end = new Date().getTime();
        if (timestamp_end - timestamp_start > refresh_time) {
            console.log("刷新时间到,点击刷新");
            refresh();
        }

    }







}


main();
