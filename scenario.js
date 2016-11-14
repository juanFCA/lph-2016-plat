function Map(){
  this.grid = [];
  for (var i = 0; i < 17; i++) {
    this.grid[i] = [];
    for (var j = 0; j < 33; j++) {
      if(i==0 || j==0 || i==8 || j==8 || i==16 || j==16 || j==24 || j==32){
        this.grid[i][j] = 1;
      }
      else{
        this.grid[i][j] = 0;
      }
    }
  }
}
Map.prototype.setGrid = function(grid){
  this.grid = grid;
}

function Scenario(){
  this.level = 1;
  this.maps = [ new Map()];
}
Scenario.prototype.setMap = function(level,map){
  this.maps[level] = map;
}
Scenario.prototype.getMap = function(level){
  return this.maps[level];
}
Scenario.prototype.getCell = function(x, y){
  return this.maps[this.level].grid[x][y];
}
Scenario.prototype.getRows = function(){
  return this.maps[this.level].grid.length;
}
Scenario.prototype.getCols = function(){
  return this.maps[this.level].grid[0].length;
}

var tutorial01 = new Map();

var tutorial02 = new Map();
/*tutorial02.setGrid([
  [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1],
  [1,0,0,0,1, 0,0,0,0,0, 1,0,0,0,1, 0,0,0,0,1],
  [1,0,0,0,1, 0,0,0,0,0, 1,0,0,0,1, 0,0,0,1,1],
  [1,0,0,0,1, 0,0,0,0,0, 1,0,0,0,1, 0,0,1,0,1],
  [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1],
  [1,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 1,0,0,0,1],
  [1,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0, 0,0,1,0,1],
  [1,0,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,1,0,0,1],
  [1,0,0,0,1, 1,0,0,0,1, 1,1,0,0,0, 1,0,0,1,1],
  [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1]
]);*/

var questTutorial = new Scenario();
questTutorial.setMap(1, tutorial01);
questTutorial.setMap(2, tutorial02);






// largura = SIZE(7)*NumCol(4)+NumCol+1(5)
//  altura = SIZE(7)*NumLin(2)+NumLin+1(3)