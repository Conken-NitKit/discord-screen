# Discord-screen
Discordのログがコメントスクリーンに反映させます。

## セットアップ
```
$ yarn install
$ heroku login
$ heroku git:remote -a <アプリケーション名>
```

## 各種設定
```
$ heroku config:set BOT_TOKEN="DiscordBotのトークン"
$ heroku config:set DESTINATION_ROOM="監視するチャンネル名"
$ heroku config:set OBSERVE_CHANNEL="表示先のコメントスクリーンのチャンネル名"
```

## デプロイ
```
$ git push heroku master --force
```

## 参考文献
- [Slackの投稿をComment Screenに表示させる](https://qiita.com/playTag55/items/89e5c3f50ef36058b1d3)
- [Discord.jsを使って開発したDiscordボットをHerokuで動かす方法](https://qiita.com/InkoHX/items/590b5f15426a6e813e92)
