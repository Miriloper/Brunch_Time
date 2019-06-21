// var ScoreBoard = {
//   ctx: undefined,
//   init: (ctx) => {
//     ctx.font = '48px serif';
//     this.ctx = ctx;
//   },
//   update: function(score, ctx) {
//     ctx.fillStyle = "#ff00ff"
//     this.ctx.fillText(Math.floor(score), 50, 50);
//   }
// };

var ScoreBoard = {
  pepe: undefined,
  init: function(pepe) {
    pepe.font = "30px sans-serif";
    this.pepe = pepe;
  },
  // update: function(val) {
  //   this.score += val;
  // }
  scoreAsc: function(val) {
    this.score += val;
  }
  
    // function(score) {
    // this.pepe.fillText(Math.floor(score), 50, 50);
  
};
