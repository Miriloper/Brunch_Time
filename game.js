class Game {
  constructor() {
    this.intervalId = ""
    this.fps=60
    this.counter=0
    this.canvas = ""
    this.ctx = ""
    this.w = window.innerWidth
    this.h = window.innerHeight
    this.imgBackg = new Image();
    this.imgBackg.src = "./images/lemons.jpg";
    // this.img = new Image();
    // this.img.src = "images/car.png";
    // this.key = 39;
    // this.obstacles = [];
  }
  init = (id) => {
    this.canvas = document.getElementById(id);
    this.canvas.width = this.w
    this.canvas.height = this.h
    // this.canvas.x = 0;
    // this.canvas.y = 0;
    this.ctx= this.canvas.getContext("2d");
    this.start();
  }
  start = () => {
      this.reset();
      this.intervalId = setInterval(()=>{
      this.counter++;
      this.clear();
      this.draw();
      // this.listener();
      //this.cosasQuePasanCuandoPasanLosSegundos
    },1000/this.fps)
  }
  reset = () => {
            // this.foodItems = new foodItems(this.ctx)
    this.counter = 0;
  }

  clear = () =>{
    this.ctx.clearRect(0, 0, this.w, this.h);
  }

  stop = () =>{
    clearInterval(this.intervalId)
  }
  draw = ()=>{
    this.drawBackground()
    this.ctx.draw = document.getElementById("canvasTests");
    this.ctx.drawFoodClouds()
            // this.ctx.drawFoodCloud1(this.ctx)
            // this.ctx.drawFoodCloud2(this.ctx)
            // this.ctx.drawFoodCloud3(this.ctx)
  }
  drawBackground = ()=>{
    this.ctx.drawImage(this.imgBackg, 0,0, this.w, this.h);
  }
}









  // listener = ()=>{
  //   // document.onkeydown = (e) => {
  //   //   e.preventDefault();
  //   //   switch (e.keyCode) {
  //   //     case this.key_left:
  //   //       if (this.xCar >= 40) {
  //   //         this.xCar -= 10;
  //   //         break;
  //   //       }
  //   //     case this.key_right:
  //   //       if (this.xCar <= 380) {
  //   //         this.xCar += 10;
  //   //         break;
  //   //       }
  //   //   }
  //   // }
  // }