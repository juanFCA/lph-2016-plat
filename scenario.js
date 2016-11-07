function Map(){
  this.grid = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ];
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

Scenario.prototype.criarLevel = function(){
    for (var i = 1; i < 9; i++) {
        return i.setGrid[7][7];
    }
}

var 1 = new Map();
1 = 1.setGrid;

var questTutorial = new Scenario();
questTutorial.setMap(1, 1);
questTutorial.setMap(2, tutorial02);


// largura = SIZE(7)*NumCol(4)+NumCol+1(5)
//  altura = SIZE(7)*NumLin(2)+NumLin+1(3)