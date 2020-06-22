let imagemCenario;
let imagenPersonagem;
let cenario;
let somDoJogo;
let personagem;


function preload() {
  imagemCenario = loadImage('https://github.com/pessoa-comun/Imers-o-GameDev/blob/master/assets/imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('https://github.com/pessoa-comun/Imers-o-GameDev/blob/master/assets/imagens/personagem/correndo.png');
  somDoJogo = loadSound('https://github.com/pessoa-comun/Imers-o-GameDev/blob/master/assets/sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 1.5);
  frameRate(40);
  personagem = new Personagem(imagemPersonagem);
  somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
}
