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
    this.score = 0;
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
        if (this.counter % 120 == 0 && this.arrCounter < 76) {
          this.generateFood();
        }
        this.moveAll();
        

  
    },1000/this.fps)
  }

  reset = () => {
    this.counter = 0;
    this.score = 0;
  }

  clear = () =>{
    this.ctx.clearRect(0, 0, this.w, this.h);
  }

  stop = () =>{
    clearInterval(this.intervalId);
  }
  draw = ()=>{
    this.drawBackground()
    this.ctx.draw = document.getElementById("canvasTests");
    this.drawClouds();
    this.drawScore();
    
  }

  drawBackground = ()=>{
    this.ctx.drawImage(this.imgBackg, 0,0, this.w, this.h);
  }

  drawScore = () => {
    this.ctx.fillText(this.score, 50, 50)
    if (this.score >= 15) {
      this.stop()

    this.ctx.beginPath();
    this.ctx.rect(this.w/3, this.h/3 - 50, 500, 300)
    this.ctx.fill();
    this.ctx.fillStyle = "#33FFB2";
    this.ctx.closePath();
    
    this.ctx.font = '60px serif';
    this.ctx.fillText("YOU FAT! :)", this.w/2 + 165, this.h/2 -15)


    }
    if (this.counter == 189000/this.fps) {

    this.stop()

    this.ctx.beginPath();
    this.ctx.rect(this.w/3, this.h/3 - 50, 500, 300)
    this.ctx.fill();
    this.ctx.fillStyle = "#33FFB2";
    this.ctx.closePath();
    
    this.ctx.font = '50px serif';
    this.ctx.fillText("STILL HUNGRY! :(", this.w/2 + 215, this.h/2 -15)


    }
  }

  shuffleFoods= (a) => {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }

  generateFood = () => {
    this.flyItemsArr.push(
      new FlyItems(
        this.ctx,
        this.thisData[this.arrCounter],
        Math.floor((Math.random() * (500 - 100 + 30) + 100))
      )
    );
    this.arrCounter++;
    // viewData.push(this.thisData[this.arrCounter])
  }

  drawClouds = () => {
  //  if (this.thisData !== 0) 
      this.flyItemsArr.forEach((flyItem)=>{
        flyItem.drawFoodsClouds();
      })
  }

  moveAll = () => {
    // if (this.flyItemsArr !== 0)
      this.flyItemsArr.forEach(function(flyItem) {
          flyItem.moveFoodsClouds()
        });
      this.flyItemsArr = this.flyItemsArr.filter(paco=>{
        return paco.x<this.w+280
      })
    
  }

  checkWord = (word) => {
    this.flyItemsArr.forEach((paco, index) => {
      if(paco.info.name === word){
        paco.autodestruccion()
        setTimeout(() => {
          this.flyItemsArr.splice(index,1)
        }, 5000)
        this.score += word.length;
      }
    });
  }

}


//TIPS: cuando supere la x me los cargo los elimino del array (puede dar error por estar recorriéndolo)