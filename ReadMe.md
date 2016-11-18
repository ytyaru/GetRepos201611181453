# このソフトウェアについて

GetRepos201611181453は私個人が学習目的で作成したソフトウェアである。

GitHubのリポジトリ一覧を取得してHTMLで表示する。

# 開発環境

* Windows XP Pro SP3 32bit
* Firefox 50.0
* [angular.js 1.5.8](https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js)
* [angular-sanitize 1.5.8](https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-sanitize.min.js)

# 実行

1. ブラウザで[GithubRepos.html](https://github.com/ytyaru/GetRepos201611181453/blob/master/GithubRepos.html)を開く
1. `ytyaru`ユーザのリポジトリ一覧が表示される

# 設定

[request.js](https://github.com/ytyaru/GetRepos201611181453/blob/master/request.js)の`var targetUser = "ytyaru";`の値を任意のユーザ名に変更すると、そのユーザのリポジトリ一覧が表示されるはず。

# ライセンス #

このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

このソフトウェアは以下のソフトウェアを使用している。

software|License
--------|-------
[AngularJS](https://angularjs.org/)|[MIT License](https://github.com/angular/angular.js/blob/master/LICENSE)
