var database;
var canvas;
var gameState = 0;
var playerCount;
var car1 , car2 , car3 , car4;
var cars;
var form,player,game;

var allPlayers;

function setup(){
  database = firebase.database();
 
  createCanvas(displayWidth , displayHeight );
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  
   if(playerCount === 4){
     game.update(1);
   }
   if(gameState === 1){
     clear();
     game. play();
   }
  
}



