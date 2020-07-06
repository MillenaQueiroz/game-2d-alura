class Pontuacao {
  constructor (){
    this.pontos = 0
  }
  exibe(){
    textAlign (RIGHT)
    textSize(45)
    fill('#fd70f5')
    text(parseInt(this.pontos), width - 30, 50)
  }
  adicionarPonto(){
    this.pontos = this.pontos + 0.2
  }
}