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
    this.flyItemsArr = []
    this.thisData = [...data]
    this.thisData = this.shuffleFoods(this.thisData)
    this.arrCounter = 0
    // this.img = new Image();
    // this.img.src = "images/car.png";
    // this.obstacles = [];
  }
  init = (id) => {
    this.canvas = document.getElementById(id);
    this.canvas.width = this.w
    this.canvas.height = this.h
    this.ctx= this.canvas.getContext("2d");


    this.start();
  }
  start = () => {
    this.reset();
    this.intervalId = setInterval(()=>{
        this.counter++;
        this.clear();
        this.draw();
        if (this.counter % 200 == 0) {
          this.generateFood();
        }
        this.moveAll();
      // this.listener();
      //this.cosasQuePasanCuandoPasanLosSegundos
    },1000/this.fps)
  }
  reset = () => {
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
    this.drawClouds()
            // this.ctx.drawFoodCloud1(this.ctx)
            // this.ctx.drawFoodCloud2(this.ctx)
            // this.ctx.drawFoodCloud3(this.ctx)
  }

  drawBackground = ()=>{
    this.ctx.drawImage(this.imgBackg, 0,0, this.w, this.h);
  }

  shuffleFoods= (a) => {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }

  generateFood = () => {
    this.flyItemsArr.push(new FlyItems(this.ctx, this.thisData[this.arrCounter]))
    this.arrCounter++;
  }

  drawClouds = () => {
    this.flyItemsArr.forEach((flyItem)=>{
      flyItem.drawFoodsClouds();
    })
  }

  moveAll = () => {
    this.flyItemsArr.forEach(function(flyItem) {
        flyItem.moveFoodsClouds();
      });
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