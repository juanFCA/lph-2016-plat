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

var tutorial01 = new Map();
tutorial01.setGrid([
  [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1],
  [1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1],
  [1,0,1,1,0, 0,1,1,0,0, 0,0,1,1,1, 0,0,0,1,1],
  [1,0,0,0,0, 0,0,0,0,0, 1,1,0,0,0, 0,0,1,0,1],
  [1,1,1,1,0, 1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1],
  [1,0,0,0,0, 0,0,0,1,1, 0,1,1,1,0, 1,0,0,0,1],
  [1,0,0,1,1, 0,0,0,0,0, 0,0,0,0,0, 0,0,1,0,1],
  [1,0,0,0,0, 0,0,1,1,1, 0,0,0,0,0, 0,1,0,0,1],
  [1,0,0,0,0, 1,1,1,1,1, 1,1,0,0,0, 1,0,0,1,1],
  [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1]
]);
var tutorial02 = new Map();
tutorial02.setGrid([
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
]);

var questTutorial = new Scenario();
questTutorial.setMap(1, tutorial01);
questTutorial.setMap(2, tutorial02);
