"ui";

ui.layout(
    <vertical padding="16">
        <text id="col" w="*" gravity="center" textSize="20sp" textColor="#30ff0000">需一美貌男子，精壮</text>
    </vertical>
);

ui.col.click(() => {
    startChange();
});

transparency = 10;
function startChange() {
    downloadId = setInterval(() => {
        transparency++;
        if (transparency > 90) {
            clearInterval(downloadId);
            return;
        }
        colnum="#"+transparency+"0000FF"
        ui.col.text(transparency.toString());
        ui.col.setTextColor(colors.parseColor(colnum))
    }, 20);
}
