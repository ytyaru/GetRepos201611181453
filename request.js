// URLを生成する
function createUrl()
{
	var targetUser = "ytyaru";
	var baseUrl = "https://api.github.com/users/" + targetUser + "/repos";
	var params = {}
	params['type'] = 'owner'
	params['sort'] = 'created'
	params['direction'] = 'desc'
	params['per_page'] = '1000'
	return baseUrl + map2str(params);
}
