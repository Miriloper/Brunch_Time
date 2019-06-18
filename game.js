class Game {
  constructor() {
    this.intervalId = ""
    this.fps=60
    this.counter=0
    this.canvas = ""
    this.ctx =""
    this.w = innerWidtht
    this.h = innerHeight
    // this.img = new Image();
    // this.img.src = "images/car.png";
    // this.key = 39;
    // this.obstacles = [];
  }
  init = () => {
    this.canvas = document.getElementById(id);
    this.ctx= this.canvas.getContext("2d");
    this.start();
  }
  start = () => {
    this.intervalId = setInterval(()=>{
      this.counter++;
      this.clear();
      this.draw();
      this.listener();
      //this.cosasQuePasanCuandoPasanLosSegundos
    },1000/this.fps)
  }
  clear = () =>{
    this.ctx.clearRect(0, 0, this.w, this.h);
  }

  stop = () =>{
    clearInterval(this.intervalId)
  }
  draw = ()=>{
    this.drawBackground()
  }
  drawBackground = ()=>{
    this.img = new Image()
    this.img.src = ;
  }
  listener = ()=>{



    // document.onkeydown = (e) => {
    //   e.preventDefault();
    //   switch (e.keyCode) {
    //     case this.key_left:
    //       if (this.xCar >= 40) {
    //         this.xCar -= 10;
    //         break;
    //       }
    //     case this.key_right:
    //       if (this.xCar <= 380) {
    //         this.xCar += 10;
    //         break;
    //       }
    //   }
    // }
  }
}