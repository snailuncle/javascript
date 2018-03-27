if (desc('展开查看全文 ▾').exists() && desc('展开查看全文 ▾').boundsInside(0, 0, WIDTH, round(HEIGHT / 3)) ||              text('展开查看全文 ▾').exists() && text('展开查看全文 ▾').boundsInside(0, 0, WIDTH, round(HEIGHT / 3))) {
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
