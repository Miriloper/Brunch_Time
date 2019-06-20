class flyItems {
  constructor(ctx, src) {
    this.ctx =ctx
    this.typeFood = data.map((dat) => (dat.image));
    //OJO CUIDAO! no sé si habrá que 
    //meter el idx después o valdrá con cogerlo luego para que no se descuageringue el orden de palabras e imágenes.
    //this.typeFood = foods.map(dat => ({image: dat.name, index: dat.index}));

    this.x = 100; //esto tendrá que empezar en negativo del camvasX
    this.y = 150; //esta tendrá que variar en cada CLOUD (he hecho 76 comidas 
    //              para que sean multiplos de 4 y así encajen en nubes y termine
    //              la última nube(4) con la última comida)
    this.w = 340;
    this.h = 220;


  }
  //methods
  drawFoodsClouds = () => {
    this.ctx.drawImage(this.typeFood, this.x, this.y, this.w, this.h);

    this.ctx.fillText("banana",this.x, this.y);
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