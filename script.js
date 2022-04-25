function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}


function lidaComMovimentoDoMouse(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    if(desenhar){
        desenhaCirculo(x, y, size.valueAsNumber, cor.value)
        desenhaCirculo(x-1, y-1, size.valueAsNumber, cor.value)
        desenhaCirculo(x-2, y-2, size.valueAsNumber, cor.value)
        desenhaCirculo(x-3, y-3, size.valueAsNumber, cor.value)
    }
}



var tela = document.querySelector('canvas');

var height = parseFloat( window.getComputedStyle(tela).height);

var width = parseFloat(window.getComputedStyle(tela).width);

var pincel = tela.getContext('2d');

var cor = document.querySelector('#pincel-color');

var background = document.querySelector('#background');

var size = document.querySelector('#size');

var borracha = document.querySelector('#borracha')

var lapis = document.querySelector('#lapis')

var foo;

pincel.fillStyle = 'black';

pincel.fillRect(0,0, width, height);

var desenhar = false;

borracha.addEventListener("click", function(){
    foo = cor.value
    cor.value = background.value
})

lapis.addEventListener("click", function(){
    cor.value = foo
})

tela.onmousemove = lidaComMovimentoDoMouse;

tela.onmousedown = function (){
    desenhar = true
}

tela.onmouseup = function (){
    desenhar = false
}

// responsividade
var largura = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var altura = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

console.log(altura);
console.log(largura);
