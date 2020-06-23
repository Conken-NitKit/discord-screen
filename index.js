const Discord = require('discord.js')
const client = new Discord.Client()

//メッセージ受信処理
client.on('message', message => {
  if (message.channel.name === process.env.OBSERVE_CHANNEL) {
    console.log(message.author.username + ':' + message.content)
    sendMessage(message.content)
  }
});

//ログイン
client.login(process.env.BOT_TOKEN)

//Comment Screen
const io = require('socket.io-client')


//CommentScreenのサーバーと接続
let socket = new io.connect('https://commentscreen.com', {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 100
})

//参加した部屋に投稿を送信する
function sendMessage(massage) {
  socket.emit('join', { room: process.env.DESTINATION_ROOM })
  let array = makeJson(massage)
  let jsonStr = JSON.stringify(array)
  socket.emit('message', jsonStr)
}

//以下、本家サイト(Comment Screen)からコピペ
function makeJson(text) {
  return {
    position: 'opt_ue',
    size: 'opt_small',
    color: '#190707',
    text: text,
    uuid: generateUuid(),
    date: new Date().getTime()
  }
}

function generateUuid() {
  // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js
  // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  let chars = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.split('')
  for (let i = 0, len = chars.length; i < len; i++) {
    switch (chars[i]) {
      case 'x':
        chars[i] = Math.floor(Math.random() * 16).toString(16)
        break
      case 'y':
        chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16)
        break
    }
  }
  return chars.join('')
}