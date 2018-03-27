"auto";
console.show();
let round = Math.round;
let WIDTH = device.width;
let HEIGHT = device.height;





function advertisement() {
    let advertisement_str = ''
    let y1, y2;
    y1 = round(HEIGHT / 3);
    y2 = round(HEIGHT / 4) * 3;
    console.log(y1, y2)
    // 前面的xxx.exists去掉把后面的text().boundsinside()加上.exists
    if (text(advertisement_str).boundsInside(0, y1, WIDTH, y2).exists()) {
        console.log('广告');
        sleep(1000);

    }
    if (textContains(advertisement).findOnce()) {
        console.log('通过text找到的广告');
    }
    if (text(advertisement_str).boundsInside(0, y1, WIDTH, y2).find().empty()) {
        console.log('是空的');
        console.log('通过boundsInside找到的广告');
        ui_collection = text(advertisement_str).boundsInside(0, y1, WIDTH, y2).find();

        ui_collection.forEach(function (tv) {
                if (tv.text() != "") {
                    log(tv.text());
                }
        });


}

}
console.log('开始')
advertisement();
console.log('结束')
