angular.module('myApp', [ 'ngSanitize' ])
	.controller('MyController', ['$scope', '$http', function($scope, $http) {
		// リクエスト送信
		$http.jsonp(createUrl(),
			{
				params: {
					callback: 'JSON_CALLBACK'
				}
			}
		)
		// レスポンス受信
		.success(function(data) {
			$scope.gitHubRepos = getHtmlString(data);
		})
		.error(function(err) {
			console.log(err);
		});
	}]);
