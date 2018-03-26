// 趣头条
"auto";
console.show();
let round = Math.round;
//请求截图
if (!requestScreenCapture()) {
    toastLog("请求截图失败,停止脚本");
    exit();
}
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
    toastLog('已经滑动');
    sleep(1000);
}

function lookat_news() {
    let n = 0;
    rnd_swipe();
    while (true) {
        toastLog('开始看新闻');
        // desc = 展开查看全文 ▾
        // id('n4').text('查看详情').findOne().click();
        // if (desc('展开查看全文 ▾').exists() && desc('展开查看全文 ▾').boundsInside(0, 0, WIDTH, HEIGHT / 3)) {
        //     toastLog('发现**展开查看全文**');
        //     sleep(2000);
        //     let click_is_ok = desc('展开查看全文 ▾').findOne().click();
        //     if (click_is_ok) {
        //         toastLog('已点击**展开查看全文')
        //     } else {
        //         toastLog('点击展开查看全文失败,停止脚本');
        //         exit();
        //     }
        //     sleep(1000);
        // }

        rnd_swipe();
        n++;

        // 判断文章读完了
        // desc = 本文及配图均为趣头条自媒体用户上传，不代表平台观点。
        // desc('本文及配图均为趣头条自媒体用户上传，不代表平台观点。').boundsInside(0, 0, WIDTH, HEIGHT / 3 * 2).findOne();
        if (desc('本文及配图均为趣头条自媒体用户上传，不代表平台观点。').exists() && desc('本文及配图均为趣头条自媒体用户上传，不代表平台观点。').boundsInside(0, 0, WIDTH, round(HEIGHT / 3)).findOnce()) {
            toastLog('发现**本文及配图均为趣头条自媒体用户上传，不代表平台观点。**');
            sleep(2000);
            back();
            toastLog('从新闻页面返回主页')
            sleep(2000);
        }



        if (n > CNT) {
            toastLog('看新闻,向上滑动超过{0}次,停止脚本'.format(CNT));
            exit();
        }
    }
}

lookat_news();
