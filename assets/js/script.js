let disciplinaEl = document.querySelector('.disciplina');
let av1El = document.querySelector('.av1');
let av2El = document.querySelector('.av2');
let av3El = document.querySelector('.av3');
const botao = document.querySelector('.button');
const clear = document.querySelector('.button-red')
let resultado = document.querySelector('.resultado')
let mediaEl = document.querySelector('.media');
let situationEl = document.querySelector('.situation');
let faltandoEl = document.querySelector('.faltando');
let materia = document.querySelector('.materia')

botao.addEventListener('click', (e) => {
    e.preventDefault();
    let av1 = parseFloat(av1El.value);
    let av2 = parseFloat(av2El.value);
    let av3 = parseFloat(av3El.value);
    

    let soma = av1 + av2 + av3;
    let media = soma / 3;
    media = media.toFixed(1)

    let situation;

    if(media >= 6) {
        situation = 'Aprovado';
    } else {
        situation = 'Recuperação';
    }

    let faltando;

    if (av1 === 0 && av2 === 0 && av3 === 0) {
        resultado.innerHTML = "Você não tem notas para calcular";
    }

    if (av1 === 0 && av2 !== 0 && av3 !== 0) {
        faltando = 18 - (av2 + av3);
        if(situation === 'Aprovado') {
            materia.innerHTML = `Disciplina: ${disciplinaEl.value}`;
            mediaEl.innerHTML = `Sua media é: ${media}`;
            situationEl.innerHTML = `Sua situação é: ${situation}`
        } else {
            materia.innerHTML = `Disciplina: ${disciplinaEl.value}`;
            mediaEl.innerHTML = `Sua media é: ${media}`;
            situationEl.innerHTML = `Sua situação é: ${situation}`
            faltandoEl.innerHTML = `Você precisar tirar ${faltando} na av1 para passar`
        }
        
    } else if (av2 === 0 && av1 !== 0 && av3 !== 0) {
        faltando = 18 - (av1 + av3);
        if(situation === 'Aprovado') {
            materia.innerHTML = `Disciplina: ${disciplinaEl.value}`;
            mediaEl.innerHTML = `Sua media é: ${media}`;
            situationEl.innerHTML = `Sua situação é: ${situation}`
        } else {
            materia.innerHTML = `Disciplina: ${disciplinaEl.value}`;
            mediaEl.innerHTML = `Sua media é: ${media}`;
            situationEl.innerHTML = `Sua situação é: ${situation}`
            faltandoEl.innerHTML = `Você precisar tirar ${faltando} na av2 para passar`
        }
    } else if (av3 === 0 && av2 !== 0 && av1 !== 0) {
        faltando = 18 - (av1 + av2);
        if(situation === 'Aprovado') {
            materia.innerHTML = `Disciplina: ${disciplinaEl.value}`;
            mediaEl.innerHTML = `Sua media é: ${media}`;
            situationEl.innerHTML = `Sua situação é: ${situation}`
        } else {
            materia.innerHTML = `Disciplina: ${disciplinaEl.value}`;
            mediaEl.innerHTML = `Sua media é: ${media}`;
            situationEl.innerHTML = `Sua situação é: ${situation}`
            faltandoEl.innerHTML = `Você precisar tirar ${faltando} na av3 para passar`
        }
    } else if(av1 !== 0 && av2 !== 0 && av3 !== 0) {
        materia.innerHTML = `Disciplina: ${disciplinaEl.value}`;
        mediaEl.innerHTML = `Sua media é: ${media}`;
        situationEl.innerHTML = `Sua situação é: ${situation}`
    } else {
        mediaEl.innerHTML = 'Você precisa ter pelo menos 2 notas para calcular';
    }
});

clear.addEventListener('click', (e) => {
    e.preventDefault();
    disciplinaEl.value = '';
    av1El.value = '';
    av2El.value = '';
    av3El.value = '';
    mediaEl.innerHTML = '';
    situationEl.innerHTML = '';
    faltandoEl.innerHTML = '';
    materia.innerHTML = '';
})


