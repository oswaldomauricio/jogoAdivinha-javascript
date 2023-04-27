/*Gerar um número aleatório entre 1 e 100. - ok
Gravar o número do turno que o jogador está. Iniciar em 1. - ok
Dar ao jogador uma forma de adivinhar o número.
Após a tentativa ter sido submetida, primeiro gravar em algum lugar para que o usuário possa ver as tentativas anteriores.
Depois, verificar se o palpite está correto.
Se estiver correto:
Escrever mensagem de parabéns.
Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
Mostrar controle que permita ao jogador reiniciar o jogo.
Se o palpite estiver errado e o jogador ainda tem turnos sobrando:
Dizer ao jogador que ele está errado.
Permitir que ele insira outra resposta.
Incrementar o número do turno em 1.
Se o jogador está errado mas não tem turnos sobrando:
Dizer ao jogador que o jogo acabou.
Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
Mostrar controle que permita ao jogador reiniciar o jogo.
Quando reiniciar, tenha certeza de resetar todas as variáveis e a interface do jogo, então volte para o passo 1.*/

var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let palpites = document.querySelector('.palpites')
let ultimoResultado = document.querySelector('.ultimoResultado')
let baixoOuAlto = document.querySelector('.baixoOuAlto')
let campoPalpite = document.querySelector('.campoPalpite')
let envioPalpite = document.querySelector('.envioPalpite')

let numPalpites = 1
let numTentativa = 0

envioPalpite.addEventListener('click', contaPalpite)

function contaPalpite(){
    for(var i = 0; i < 10; i++){
        envioPalpite[1] = console.log('tt')
    }
}

function tentativas(){
    contaPalpite()
}

function conferirPalpite() {
    alert('Eu sou um placeholder');
  }
  