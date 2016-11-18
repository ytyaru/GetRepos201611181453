// 連想配列→URL引数形式テキスト
function map2str(map)
{
	var str = "?";
	for (var key in map) {
		str += key + "=" + map[key] + "&"
	}
	return str.substr(0, str.length - 1);
}
