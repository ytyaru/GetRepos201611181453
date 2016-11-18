// 日付の相対表記（yyyy-MM-ddTHH:mm:ssZ→n日）
function abs2rel(baseDate, targetDate)
{
	var elapsedTime = Math.ceil((baseDate.getTime() - targetDate.getTime())/1000);
	if (elapsedTime < 60) { return (elapsedTime / 60) + "秒"; }
	else if (elapsedTime < (60 * 60)) { return Math.floor(elapsedTime / 60) + "分"; }
	else if (elapsedTime < (60 * 60 *24)) { return Math.floor(elapsedTime / 60 / 60) + "時間"; }
	else if (elapsedTime < (60 * 60 *24 * 7)) { return Math.floor(elapsedTime / 60 / 60 / 24) + "日"; }
	else if (elapsedTime < (60 * 60 *24 * 30)) { return Math.floor(elapsedTime / 60 / 60 / 24 / 7) + "週"; }
	else if (elapsedTime < (60 * 60 *24 * 365)) { return Math.floor(elapsedTime / 60 / 60 / 24 / 30) + "ヶ月"; }
	else if (elapsedTime < (60 * 60 *24 * 365 * 100)) { return Math.floor(elapsedTime / 60 / 60 / 24 / 365) + "年"; }
	else { return Math.floor(elapsedTime / 60 / 60 / 24 / 365 / 100) + "世紀"; }
}
// http://qiita.com/osakanafish/items/c64fe8a34e7221e811d0
function formatDate(date, format)
{
	if (!format) format = 'YYYY-MM-dd HH:mm:ss.fff';
	format = format.replace(/yyyy/g, date.getFullYear());
	format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
	format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
	format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
	format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
	format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
	if (format.match(/f/g)) {
		var milliSeconds = ('00' + date.getMilliseconds()).slice(-3);
		var length = format.match(/f/g).length;
		for (var i = 0; i < length; i++) format = format.replace(/f/, milliSeconds.substring(i, i + 1));
	}
	return format;
}
