class FlyItems{
  constructor(ctx, info) {
    this.ctx =ctx
    this.info = info

    this.typeFood = data.map((dat) => (dat.image));

    this.x = 100; //esto tendrá que empezar en negativo del canvasX e ir sumando con el tiempo(counter?)
    this.y = 150; //esta tendrá que variar en cada CLOUD (he hecho 76 comidas 
    //              para que sean multiplos de 4 y así encajen en nubes y termine
    //              la última nube(4) con la última comida)
    this.w = 340;
    this.h = 220;


  }
  //methods
  drawFoodsClouds = () => {
  //  this.ctx.drawImage(this.typeFood, this.x, this.y, this.w, this.h);
    this.ctx.font = '48px serif';
    this.ctx.fillText(this.info.name,this.x, this.y);
  }

  // drawFoodsCloud2 = (ctx) => {
  //   this.drawImage
  // }

  // drawFoodsCloud3 = (ctx) => {
  //   this.drawImage
  // }
}







  // this.imgBackg = new Image();
  // this.imgBackg.src = "";
  // this.img = new Image();
  // this.img.src = src;
  // this.key = 39;
  // this.obstacles = [];