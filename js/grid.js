var Grid = function(){
  this.columns = 4;
  var rows = ["a", "b"];
  var grid = [];
  for (rowIndex in rows) {
    for (column = 1; column <= this.columns; column++) {
      grid.push(rows[rowIndex] + column);
    }
  }
  this.map = grid;
};

module.exports = Grid;