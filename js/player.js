var Path = require('./path')

var Player = function(){
  this.place = "a1"
  this.path = new Path;
};



Player.prototype.moveRight = function(){
  return this.place = this.path.grid[this.path.grid.indexOf(this.place) + 1 ];
};

Player.prototype.moveLeft = function(){
  return this.place = this.path.grid[this.path.grid.indexOf(this.place) - 1 ];
};

Player.prototype.moveDown = function(){
  return this.place = this.path.grid[this.path.grid.indexOf(this.place) + this.path.columns ];
};

Player.prototype.moveUp = function(){
  return this.place = this.path.grid[this.path.grid.indexOf(this.place) - this.path.columns ];
}


module.exports = Player;