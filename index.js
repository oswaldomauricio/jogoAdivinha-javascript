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
let btnGanhar = document.querySelector('#btnGanhar')

let envioPalpite = document.querySelector('.envioPalpite')

let numPalpites = 0
let numTentativa = 1



envioPalpite.addEventListener('click', contarPalpite)
envioPalpite.addEventListener('click', ultimasTentativas)
envioPalpite.addEventListener('click', adivinharNumero)
btnGanhar.addEventListener('click', reiniciarJogo)

function contarPalpite() {
    for (var i = 0; i < 1; i++) {
        numTentativa[i] = numTentativa++
    }
    if (numTentativa >= 11) {
        btnGanhar.style.display = 'flex' 
        let removeCampoPalpite = document.querySelector('.form')
        removeCampoPalpite.style.display = 'none'
    }
}


function ultimasTentativas() {
    let palpiteUsuario = Number(campoPalpite.value)

    if (palpiteUsuario == 0) {
        palpiteUsuario = 1 + palpiteUsuario
    }

    let para = document.createElement('ultimoResultado');
    para.textContent = '  ' + palpiteUsuario;
    document.body.appendChild(para);

    let tentativasTela = document.createElement('tentativasTela');
    tentativasTela.textContent = 'ultimos resuiltados';
    
}

function adivinharNumero() {
    let palpiteUsuario = Number(campoPalpite.value)
    if (palpiteUsuario < numeroAleatorio) {
        palpites.textContent = 'Você digitou um valor baixo demais!'
        palpites.style.backgroundColor = 'red'

    } else if (palpiteUsuario > numeroAleatorio & palpiteUsuario < 100) {
        palpites.textContent = 'Você digitou um valor alto demais!'
        palpites.style.backgroundColor = 'blue'

    } else if (palpiteUsuario == numeroAleatorio) {
        palpites.textContent = 'Você ganhou, parabêns!'
        palpites.style.backgroundColor = 'green'
        palpites.style.height = '40px'

        btnGanhar.style.display = 'flex' 
        //aparecer o botao de reiniciar o jogo.
        let removeCampoPalpite = document.querySelector('.form')
        removeCampoPalpite.style.display = 'none'
        //remove o campo para digitar outro numero.
    }else if(palpiteUsuario > 100){
        palpites.textContent = 'você digitou um valor maior que 100, perdeu uma tentativa.'
        palpites.style.backgroundColor = 'orange'
    }
}

function reiniciarJogo() {
    if (btnGanhar) {
        window.location.reload() //força o reload da pagina ao ganhar o jogo.
    }
}

