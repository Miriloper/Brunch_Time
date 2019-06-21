class FlyItems{
  constructor(ctx, info, posY) {
    this.ctx =ctx
    this.info = info
    this.posY = posY

    this.typeFood = data.map((dat) => (dat.image));

    this.x = -550; //esto tendrá que empezar en negativo del canvasX e ir sumando con el tiempo(counter?)
    this.y = 150; //esta tendrá que variar en cada CLOUD 
    this.dx = 4;
    this.dy = 2;
    this.w = 340;
    this.h = 220;
    this.onMove = true

    this.imgFood = new Image();
    //this.imgFood.src = this.info.image;

  }
  //methods
  drawFoodsClouds = () => {
    this.y = this.posY
    //this.ctx.drawImage(this.imgFood, this.x, this.y, this.w, this.h);
    this.ctx.font = '48px serif';
    this.ctx.fillText(this.info.name,this.x, this.y);
  }

  moveFoodsClouds = () => {
    if (this.onMove){
      this.x += this.dx;
    }
    else {
      console.log(this.dy, this.y, this.posY)
      this.dy *= 1.05;
      this.posY += this.dy;
    }
  }

  autodestruccion = () => {
    this.onMove = false
    this.info.name = ""
    //this.imgFood
    //crea image(this.imgFood) y la hago caer

    scoreAsc(this.info.name.length);
  }

}