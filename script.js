var bot = document.querySelector('.barra')
var bot2 = Number(bot)
var bot2 = 1

function acaoBotao() {
    var cima = document.querySelector('.barra_superior')
    var meio = document.querySelector('.barra_central')
    var baixo = document.querySelector('.barra_inferior')

    var barraLateral = document.querySelector('.nav')

    if(bot2 == 1) {

        cima.style.transform = 'rotate(-37deg)';
        cima.style.top = '7px';
        cima.style.width = '26px';
        cima.style.transition = '0.5s';


        meio.style.display = 'none';

        baixo.style.transform = 'rotate(38deg)';
        baixo.style.top = '-4px';
        baixo.style.width = '26px';
        baixo.style.transition = '0.5s';

        barraLateral.style.right = '0em';
        barraLateral.style.top = '3em';
        barraLateral.style.transition = '0.5s'

        bot2 += 1
    } else {
        cima.style.transform = 'rotate(0deg)';
        cima.style.top = '0px';
        cima.style.width = '30px';
        cima.style.transition = '0.5s';


        meio.style.display = 'block';

        baixo.style.transform = 'rotate(0deg)';
        baixo.style.top = '0px';
        baixo.style.width = '30px';
        baixo.style.transition = '0.5s';

        barraLateral.style.right = '-20em';
        barraLateral.style.top = '3em';
        barraLateral.style.transition = '0.5s'

        bot2 -= 1
    }
}

bot.addEventListener("touchstart", acaoBotao)
bot.addEventListener("click", acaoBotao)