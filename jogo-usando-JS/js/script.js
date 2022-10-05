

const mario = document.querySelector('.mario')
const pipePosicao= document.querySelector('.pipe')

const jump = () =>{

    mario.classList.add('jump')

// O método global setTimeout()define um cronômetro que executa
//uma função ou trecho de código especificado assim que o cronômetro expirar.


    setTimeout(() => {

        mario.classList.remove('jump')
    }, 300)


}

var loop = setInterval(() => {

var posicao = pipePosicao.offsetLeft;
var posicaoMario = +window.getComputedStyle(mario).bottom.replace("px" , "")

if (posicao <= 120 && posicao > 0 && posicaoMario < 80){

    pipePosicao.style.animation = "none"
    pipePosicao.style.left = `${posicao}px`;
    mario.style.animation = "none"
    mario.style.bottom = `${posicaoMario}px`

    mario.src="./img/game-over.png"
    mario.style.width = "75px"
    mario.style.marginLeft = "50px"
clearInterval(loop)
}

}, 10);

document.addEventListener('keydown', jump)




