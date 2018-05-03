"auto";
console.show();

var resource = http.get("http://music.163.com/m/playlist?id=65423251", {
    headers: {
        "User-Agent": "Mozilla/5.0 Dalvik/2 ( Linux; U; NEM-AL10 Build/HONORNEM-AL10;Youku;7.1.4;) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Safari/537.36 (Baidu; P1 6.0) iPhone/7.1 Android/8.0 baiduboxapp/2.7.0.10"
    }
})
//网页源码
var html = resource.body.string()
//取歌曲列表
var pattern = /<ol\sclass="u-songs"[\s\S]*<\/ol>/
var r1 = pattern.exec(html)
//取内容
var pattern = /<!-- react-text: \d+? -->(.*?)<!-- \/react-text -->/g;

while ((result = pattern.exec(r1[0])) != null) {
    log(result[1]);
}


