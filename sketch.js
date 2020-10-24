var p5random = [];
var posicaoY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke(0);
  criarLinha();
}


function criarLinha(){  
  for(var i = 0; i < width; i++){
    p5random[i] = random(0, 100); 
  } 
  
  for(var i = 0; i < p5random.length; i++){
    var rnd = p5random[i];
    var a = map(rnd, 0, 100, 0, 255);
    var x = 5 + i * 10;
    
    fill(255, a); // com dois valores, o segundo passa a ser transparência
    ellipse(x, posicaoY, 10, 10);
  }
  
  if(posicaoY < height){
    posicaoY += 5;
  }else{
    posicaoY = 0; 
  }
}

function mousePressed(){
   criarLinha();
}
