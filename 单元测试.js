"auto";
// console.show();
// console.hide();
let round = Math.round;
let WIDTH = device.width;
let HEIGHT = device.height;
let y1, y2;
y1 = round(WIDTH / 3);
y2 = round(HEIGHT / 4) * 3;
function advertisement() {
    let app_name = '推广';
    if (text(app_name).find().empty()) {
        console.log('是空的');
    } else {
        console.log('不是空的');
        log(y1,y2)
        ui_collection = text(app_name).boundsInside(1,y1,WIDTH,y2).find();
        // ui_collection = text(app_name).boundsInside(10, 1263, 164, 1319).find();
        console.log(ui_collection.size())
        ui_collection.forEach(function (tv) {
            if (tv.text() != "") {
                log(tv.text());
                log(tv.bounds());
            }
        });

    }
}

console.log('开始')
advertisement();
console.log('结束')
