var backImg
var gameState=0
var database 
var form,player,game
var playerCount

function setup() {

  canvas=createCanvas(400,400)
  database=firebase.database()
  game=new Game()
  game.getState()
  game.start()
  
}

function draw() {
  
}