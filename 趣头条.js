// netsh wlan start hostednetwork

// netsh wlan stop hostednetwork

auto();

//  Show log from Auto.js on Console.(Press Ctrl+Shift+Y to open console)
//  Run and stop script on attached device(s)

//  Press Ctrl+Shift+P and enter Auto.js you can see several commands:

//  名称	                     描述	                     键盘快捷方式
//  extension.startServer	    Auto.js: Start Server
//  extension.stopServer    	Auto.js: Stop Server
//  extension.run	            Auto.js: Run	            F5
//  extension.runOnDevice	    Auto.js: Run On Device	    Ctrl+F5
//  extension.stop	        Auto.js: Stop	            Shift+F5
//  extension.stopAll	        Auto.js: Stop All
//  extension.rerun	        Auto.js: Rerun	            Ctrl+Shift+F5
//  extension.save	        Auto.js: Save	            Ctrl+Shift+S
//  extension.saveToDevice	Auto.js: Save On Device

//根据名字启动app
// launchApp("趣头条");
//启动微信
// launch("com.tencent.mm");
// var name = getPackageName("QQ"); //返回"com.tencent.mobileqq"
// appname="QQ";
// packageName = "com.tencent.mobileqq";
// app.openAppSetting(packageName);
//打开应用来查看图片文件
// appname="图库"
// var packageName=getPackageName(appname)

// function click_console(k){
//     x=659;
//     y=167;
//     k=k||1;
//     click(x,y);
//     for (var i = 0; i < k; i++) {
//         click(x,y);
//     }
// }
// console.show();
// textContent="杨幂"
// input(textContent);
// var sendButton = text("发送").findOne();
// sendButton.click();

// var zhangsan = {}
// zhangsan.name = "张三";
// zhangsan.sex = "男";
// zhangsan.say = function () {
//     return "嗨！大家好，我来了。";
// }
// zhangsan.contact = {
//     tel: "029-81895644",
//     qq: "1370753465",
//     email: "itxueyuan@gmail.com"
// }
// var strTem = "";  // 临时变量
// for (value in sendButton) {
//     strTem += value + '：' + zhangsan[value] + "\n";
// }
// alert(strTem);
// while(true){
//     className('EditText').findOne().setText("刷屏...");
//     text("发送").findOne().click();
// }
// while(true){
//     className('EditText').setText("刷屏");
//     text('发送').click();
// }

// console.show();
// className("TextView").find().forEach(function (tv) {
//     if (tv.text() != "") {
//         log(tv.text());
//     }
// });
//光线传感器监听
console.show();
// sensors.register("light").on("change", (event, light) => {
//     log("当前光强度为", light);
// });
//忽略不支持的传感器
// sensors.ignoresUnsupportedSensor = true;
// //监听有不支持的传感器时的事件
// sensors.on("unsupported_sensor", function (sensorName) {
//     toastLog("不支持的传感器: " + sensorName);
// });
// //随便注册一个不存在的传感器。
// log(sensors.register("aaabbb"));
//csv文件路径
// const csvPath = "/sdcard/sensors_data.csv";
// //记录光线传感器的数据
// var light = 0;
// //记录加速度传感器的数据
// var ax = 0;
// var ay = 0;
// var az = 0;
// //监听光线传感器
// sensors.register("light", sensors.delay.fastest)
//     .on("change", l => {
//         light = l;
//     });
// //监听加速度传感器
// sensors.register("accelerometer", sensors.delay.fastest)
//     .on("change", (ax0, ay0, az0) => {
//         ax = ax0;
//         ay = ay0;
//         az = az0;
//     });

// var file = open(csvPath, "w");
// //写csv表格头
// file.writeline("light,ax,ay,az")
// //每0.5秒获取一次数据并写入文件
// setInterval(() => {
//     file.writeline(util.format("%d,%d,%d,%d", light, ax, ay, az));
// }, 500);
// //10秒后退出并打开文件
// setTimeout(() => {
//     file.close();
//     sensors.unregsiterAll();
//     app.viewFile(csvPath);
// }, 10 * 1000);
// var sh = new Shell(true);
// //强制停止微信
// sh.exec("am force-stop com.tencent.mm");
// sh.exit();
// shell('am start -p com.tencent.mm');
// log(shell("ls /system/bin").result);
//atomic返回的对象保证了自增的原子性

// get 获取 / set 设置,

//     add 增加 / remove 删除

// create 创建 / destory 移除

// start 启动 / stop 停止

// open 打开 / close 关闭,

//     read 读取 / write 写入

// load 载入 / save 保存,

//     create 创建 / destroy 销毁

// begin 开始 / end 结束,

//     backup 备份 / restore 恢复

// import 导入/export 导出,

// split 分割 / merge 合并

// inject 注入 / extract 提取,

//     attach 附着 / detach 脱离

// bind 绑定 / separate 分离,

//     view 查看 / browse 浏览

// edit 编辑 / modify 修改,

//     select 选取 / mark 标记

// copy 复制 / paste 粘贴,

//     undo 撤销 / redo 重做

// insert 插入 / delete 移除,

//     add 加入 / append 添加

// clean 清理 / clear 清除,

//     index 索引 / sort 排序

// find 查找 / search 搜索,

//     increase 增加 / decrease 减少

// play 播放 / pause 暂停,

//     launch 启动 / run 运行

// compile 编译 / execute 执行,

//     debug 调试 / trace 跟踪

// observe 观察 / listen 监听,

//     build 构建 / publish 发布

// input 输入 / output 输出,

//     encode 编码 / decode 解码

// encrypt 加密 / decrypt 解密,

//     compress 压缩 / decompress 解压缩

// pack 打包 / unpack 解包,

//     parse 解析 / emit 生成

// connect 连接 / disconnect 断开,

//     send 发送 / receive 接收

// download 下载 / upload 上传,

//     refresh 刷新 / synchronize 同步

// update 更新 / revert 复原,

//     lock 锁定 / unlock 解锁

// check out 签出 / check in 签入,

//     submit 提交 / commit 交付

// push 推 / pull 拉,

//     expand 展开 / collapse 折叠

// begin 起始 / end 结束,

//     start 开始 / finish 完成

// enter 进入 / exit 退出,

//     abort 放弃 / quit 离开

// obsolete 废弃 / depreciate 废旧,

//     collect 收集 / aggregate 聚集

// 涉及返回逻辑值的函数可以使用is，has，contains等表示逻辑的词语代替动词
