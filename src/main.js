const string = `

.html body{
    background: #93b8ca;
    height: 100vh;
}
.skin{
    position: relative;
}
.head {
    position: absolute;
    left: 50%;
    margin-left: -215px;
    width: 430px;
    height: 420px;
    border: 2px solid #000;
    background:#1e90ff;
    border-radius: 47% 47% 45% 45% ;
}
.head .eye{
    border: 2px solid #000;
    width: 90px;
    height: 110px;
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -45px;
    background: #fff;
    border-radius: 47% 47% 45% 45%;
    z-index: 5;
}
.head .eye.left {
    transform: translateX(-45px);
}
.head .eye.right {
    transform: translateX(45px);
}
.head .eye::after{
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: #000;
    position: absolute;
    top: 60px;
    border-radius: 50%;
}
.head .eye.left::after{
    right: 10px;
}
.head .eye.right::after{
    left: 10px;
}
.face{
    border: 2px solid #000;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 360px;
    height: 300px;
    margin-left: -180px;
    background: #fff;
    border-radius: 80% 80% 90% 90%;
}
.nose {
    border: 2px solid #000;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 25px;
    left: 50%;
    margin-left: -25px;
    border-radius: 50% 50% 45% 45%;
    background: #ff0000;
}
.nose::after{
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    right: 2px;
    top: 12px;
    border-radius: 50%;
    background: #fff;
}
.nose2 {
    border-left: 2px solid #000;
    width: 2px;
    height: 157px;
    position: absolute;
    top: 75px;
    left: 50%;
    margin-left: -1px;
}
.mouth {
    border-bottom: 2px solid  #000;
    width: 240px;
    height: 200px;
    position: absolute;
    top: 33px;
    left: 50%;
    margin-left: -120px;
    border-radius: 0 0 45% 45%;
}
.whisker{
    display: block;
    border-top: 2px solid #000;
    width: 100px;
    position: absolute;
}
.whisker_left span:nth-child(1){
    top: 90px;
    transform: rotate(20deg);
}
.whisker_left span:nth-child(2){
    top: 130px;
}
.whisker_left span:nth-child(3){
    top: 170px;
    transform: rotate(-20deg);
}
.whisker_right span:nth-child(1){
    top: 90px;
    right: 0px;
    transform: rotate(-20deg);
}
.whisker_right span:nth-child(2){
    right: 0px;
    top: 130px;
}
.whisker_right span:nth-child(3){
    top: 170px;
    right: 0px;
    transform: rotate(20deg);
}
.neck{
    border: 2px solid #000;
    width: 300px;
    height: 50px;
    position: absolute;
    top: 400px;
    left: 50%;
    margin-left:-150px ;
    border-radius: 50px;
    background: #ff0000;
}
.bell{
    border: 2px solid #000;
    width: 60px;
    height: 60px;
    position: absolute;
    top: 15px;
    left: 50%;
    margin-left: -30px;
    border-radius: 50%;
    background: #ffff00;
}
.bell2{
    display: block;
    width: 50px;
    height: 1px;
    border-top: 2px solid #000;
    position: absolute;
    top: 12px;
    left: 50%;
    margin-left: -25px;
}
.bell3{
    display: block;
    width: 58px;
    height: 1px;
    border-top: 2px solid #000;
    position: absolute;
    top: 20px;
    left: 50%;
    margin-left: -29px;
}
.bell4 {
    display: block;
    width: 12px;
    height: 8px;
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -6px;
    border-radius: 50%;
    background: #000;
}
.bell5{
    display: block;
    width: 2px;
    height: 19px;
    border-left: 2px solid #000; 
    position: absolute;
    top: 38px;
    left: 50%;
    margin-left: -1px;
}

`
const player = {
    id: undefined,
    time: 100,
    ui: {
      demo: document.querySelector('#demo'),
      demo2: document.querySelector('#demo2')
    },
    events: {
      '#btnPause': 'pause',
      '#btnPlay': 'play',
      '#btnSlow': 'slow',
      '#btnNormal': 'normal',
      '#btnFast': 'fast'
    },
    n: 1,
    init: () => {
      player.ui.demo.innerText = string.substr(0, player.n)
      player.ui.demo2.innerHTML = string.substr(0, player.n)
      player.bindEvents()
      player.play()
    },
    bindEvents: () => {
      for (let key in player.events) {
        if (player.events.hasOwnProperty(key)) {
          const value = player.events[key] // pause / play / slow
          document.querySelector(key).onclick = player[value]
        }
      }
  
    },
    run: () => {
      player.n += 1
      if (player.n > string.length) {
        window.clearInterval(player.id)
        return
      }
      player.ui.demo.innerText = string.substr(0, player.n)
      player.ui.demo2.innerHTML = string.substr(0, player.n)
      player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: () => {
      window.clearInterval(player.id)
      player.id = setInterval(player.run, player.time)
    },
    pause: () => {
      window.clearInterval(player.id)
    },
    slow: () => {
      player.pause()
      player.time = 300
      player.play()
    },
    normal: () => {
      player.pause()
      player.time = 100
      player.play()
    },
    fast: () => {
      player.pause()
      player.time = 0
      player.play()
    }
  }
  
  player.init()