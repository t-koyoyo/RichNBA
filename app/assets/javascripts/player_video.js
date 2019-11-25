var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('sample01', {
    height: '313',
    videoId: '3XFX5zax5bM',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      controls: 0, //再生ボタンとか出さない
      showinfo: 0, //動画名とか出さない
      disablekb: 1, //ショートカットキー無効
      rel: 0 //関連動画出さない
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
  event.target.mute();
}
//ココまではほぼサンプルと同じ

var loopCount = 0;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {//動画が停止したら
    if(loopCount < 20) {//ループ上限
      event.target.seekTo(0,true);//動画の初めにシーク
      event.target.playVideo();//動画を再生
      loopCount++;
    }
  }
}

// 各プレーヤーの格納
var ytPlayer = [];
// プレーヤーのサイズ
var ytWidth = 640;
var ytHeight = 313;
// 各動画情報
// var ytData = [
//   {id: 'MQs0F-9IwT0',area: 'teamvideo_Celtics'}, {id: 'K0vdUSOge4Y',area: 'teamvideo_Nets'}, {id: 'MQs0F-9IwT0',area: 'teamvideo_Knicks'}, 
//     {id: 'MQs0F-9IwT0',area: 'teamvideo_76ers'},{id: 'MQs0F-9IwT0',area: 'teamvideo_Raptors'},{id: 'MQs0F-9IwT0',area: 'teamvideo_Bulls'},
//       {id: 'MQs0F-9IwT0',area: 'teamvideo_Cavaliers'},{id: 'MQs0F-9IwT0',area: 'teamvideo_Pistons'},{id: 'MQs0F-9IwT0',area: 'teamvideo_Pacers'},
//         {id: 'n5S5Sa6uDnM',area: 'teamvideo_Bucks'},{id: 'MQs0F-9IwT0',area: 'teamvideo_Hawks'},{id: 'MQs0F-9IwT0',area: 'teamvideo_Hornets'},
//           {id: 'MQs0F-9IwT0',area: 'teamvideo_Heat'},{id: 'MQs0F-9IwT0',area: 'teamvideo_Magic'},{id: 'MQs0F-9IwT0',area: 'teamvideo_Wizards'},
//   {id: 'MQs0F-9IwT0',area: 'teamvideo_Mavericks'},{id: 'DGT_TTXmiOw',area: 'teamvideo_Rockets'},{id: 'MQs0F-9IwT0',area: 'teamvideo_Grizzlies'},
//     {id: 'MQs0F-9IwT0',area: 'teamvideo_Pelicans'},{id: 'MQs0F-9IwT0',area: 'teamvideo_Spurs'},{id: 'MQs0F-9IwT0',area: 'teamvideo_Nuggets'},
//       {id: 'MQs0F-9IwT0',area: 'teamvideo_Timberwolves'},{id: 'MQs0F-9IwT0',area: 'teamvideo_Thunder'},{id: 'IJwFvRmBoUw',area: 'teamvideo_Blazers'},
//         {id: 'MQs0F-9IwT0',area: 'teamvideo_Jazz'},{id: 'E6PER1dmIJU',area: 'teamvideo_Warriors'},{id: 'ymk42QfmuqY',area: 'teamvideo_Clippers'},
//           {id: 'MQs0F-9IwT0',area: 'teamvideo_Lakers'},{id: 'MQs0F-9IwT0',area: 'teamvideo_Suns'},{id: 'MQs0F-9IwT0',area: 'teamvideo_Kings'}
// ];
 
// 各プレーヤーの埋め込み
function onYouTubeIframeAPIReady() {
    for(var i = 0; i < ytData.length; i++) {
        ytPlayer[i] = new YT.Player(ytData[i]['area'], {
            width: ytWidth,
            height: ytHeight,
            videoId: ytData[i]['id'],
            playerVars: {
                rel: 0
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },
            playerVars: {
                    controls: 0, //再生ボタンとか出さない
                    showinfo: 0, //動画名とか出さない
                    disablekb: 1, //ショートカットキー無効
                    rel: 0 //関連動画出さない
                  }
        });
    }
}
 
// 各プレーヤー準備完了後の処理
function onPlayerReady(e) {
  // e.target.playVideo();
  //   e.target.mute();
}
var loopCount = 0;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {//動画が停止したら
    if(loopCount < 20) {//ループ上限
      event.target.seekTo(0,true);//動画の初めにシーク
      event.target.playVideo();//動画を再生
      loopCount++;
    }
  }
}