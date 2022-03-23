//格式化时间的方法
function dateFormat(dateStr) {
    const dt = new Date(dateStr);
    //年月日
    const y = dt.getFullYear();
    const m = padZero(dt.getMonth() + 1);
    const d = padZero(dt.getDate());
    //时分秒
    const hour = padZero(dt.getHours());
    const minu = padZero(dt.getMinutes());
    const seco = padZero(dt.getSeconds());
    return `${y}-${m}-${d} ${hour}:${minu}:${seco}`
}
//补零
function padZero(n) {
    return n > 9 ? n : '0' + n;
}

module.exports = {
    dateFormat
}