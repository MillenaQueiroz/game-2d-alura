function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
  
  fita = loadJSON('fita/fita.json');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
}