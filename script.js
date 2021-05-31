// NUMEROS
const numeros = document.querySelectorAll('input[id="numero"]'),
    resultado = document.querySelector('#result');

numeros.forEach(e => {
    e.addEventListener('click', () => {
        resultado.value += e.value;
    })
})


// APAGANDO
const del = document.querySelector('input[value="DEL"]'),
    ce = document.querySelector('input[value="CE"]'),
    cc = document.querySelector('input[value="C"]'),
    apaga = [cc, ce];

del.addEventListener('click', backspace);
function backspace() {
    let x = resultado.value;
    if (x.length > 0) {
        let y = x.substring(0, x.length - 1);
        resultado.value = y;
    }
};

apaga.forEach(e => {
    e.addEventListener('click', apagaTudo)

    function apagaTudo() {
        resultado.value = ' ';
    }
});


// OPERAÇOES
const soma = document.querySelector('input[value="+"]'),
    subt = document.querySelector('input[value="-"]'),
    times = document.querySelector('input[value="*"]'),
    porc = document.querySelector('input[value="%"]'),
    divi = document.querySelector('input[value="/"]'),
    operacoes = [soma, subt, times, divi, porc];

operacoes.forEach(e => {
    e.addEventListener('click', Conta);
    function Conta() {
        resultado.value += e.value;
    }
})


// PONTO
const ponto = document.querySelector('input[value="."]');
ponto.addEventListener('click', () => {
    resultado.value += '.'
})


//RESULTADO
const final = document.querySelector('input[value="="]');
final.addEventListener('click', () => {
    resultado.value = eval(resultado.value);
});






