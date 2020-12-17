 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 
var particles
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var turn = 0;

var gameState = "start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, 650, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }


}
 


function draw() {
  background("black");
  textSize(30)
   
 
  Engine.update(engine);
  text("Score : "+score,20,30);
  if(particles){
    particles.display()
    if(particles.body.position.x<300&&particles.body.position.y>500&&particles.body.position.x>0){
      score=score+500
      particles=null;
      Turn()
    }else if(particles.body.position.x>301&&particles.body.position.y>500&&particles.body.position.x<600){
             score=score+100
             particles=null;
             Turn()
    }else if(particles.body.position.x>601&&particles.body.position.y>500&&particles.body.position.x<800){
      score=score+200
      particles=null;
      Turn()
    }
  }
  for(var k=0;k<plinkos.length;k++){
    plinkos[k].display()
  }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   text("100",415,550)
   text("100",335,550)
   text("100",495,550)
   text("500",255,550)
   text("200",575,550)
   text("500",175,550)
   text("200",655,550)
   text("500",95,550)
   text("200",735,550)
   text("500",15,550)
   if(gameState==="end"){
    fill(124,124,124)
    textSize(100)
    text("Game Over",200,300)
  }
}


function mousePressed(){
  if(gameState!=="end"){
  particles=new Particle(mouseX, 10,10);
  turn++;
  }
}

function Turn(){
  if(turn>=5){
    gameState="end";
  }
}

