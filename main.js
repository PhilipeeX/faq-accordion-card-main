const clicavel = document.querySelectorAll('.pergunta-resposta-seta');
const textoPergunta = document.querySelectorAll('.pergunta')
const setas = document.querySelectorAll('.seta')
let textoResposta = document.querySelectorAll('.resposta');
let arranjoCaixa = Array.from(clicavel);
let arranjoCaixaPergunta = Array.from(textoPergunta);
let arranjoCaixaResposta = Array.from(textoResposta);
let arranjoSeta = Array.from(setas);

for (let i = 0; i <= 4; i++){
arranjoCaixa[i].addEventListener('click', function(){

    if (arranjoCaixaResposta[i].style.display != 'inline'){
        for (let j = 0; j<=4; j++){
            arranjoSeta[j].classList.remove('alinhar-seta');
            arranjoSeta[j].classList.add('seta');
            arranjoCaixaResposta[j].style = 'display: none';
            arranjoCaixaPergunta[j].style.color = 'hsl(237, 12%, 33%)';
            arranjoCaixaPergunta[j].style.fontWeight = 400;
            arranjoCaixaPergunta[j].style.paddingBottom = 0;
        }
        arranjoCaixaResposta[i].style.display = 'inline';
        arranjoCaixaPergunta[i].style.fontWeight = 700;
        arranjoCaixaPergunta[i].style.paddingBottom = '1rem';
        arranjoSeta[i].classList.remove('seta');
        arranjoSeta[i].classList.add('alinhar-seta');
    } else {
        arranjoSeta[i].classList.remove('alinhar-seta');
        arranjoSeta[i].classList.add('seta');
        arranjoCaixaResposta[i].style = 'display: none';
        arranjoCaixaPergunta[i].style.color = 'hsl(237, 12%, 33%)';
        arranjoCaixaPergunta[i].style.fontWeight = 400;
        arranjoCaixaPergunta[i].style.paddingBottom = 0;
    }
})
}