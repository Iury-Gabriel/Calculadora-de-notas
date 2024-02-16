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


function verificar_inputs() {
    av1El.addEventListener('keyup', () => {
        verificar_input(av1El)
    })

    av2El.addEventListener('keyup', () => {
        verificar_input(av2El)
    })

    av3El.addEventListener('keyup', () => {
        verificar_input(av3El)
    })

    function verificar_input(input) {
        if(input.value) {
            let av = parseFloat(input.value);

            if(av > 20) input.value = 10;
            if(av < 0) input.value = 0;
        }
    }
}

verificar_inputs();

botao.addEventListener('click', (e) => {
    e.preventDefault();


    let av = [];
    let semvalor = [];
    let media = 0;

    faltandoEl.innerHTML = '';
    disciplinaEl.innerHTML = '';
    situationEl.innerHTML = '';
    mediaEl.innerHTML = '';
    
    verificar(av1El, "av1")
    verificar(av2El, "av2")
    verificar(av3El, "av3")

    function verificar(input, avaliacao) {
        if(input.value) av.push(parseFloat(input.value))
        else semvalor.push(avaliacao)
    }

    if(disciplinaEl.value) materia.innerHTML = `Disciplina: ${disciplinaEl.value}`

    if(!av1El.value && !av2El.value && !av3El.value) mediaEl.innerHTML = "Você não tem notas para calcular"
    
    media = av.reduce((total, atual) => total + atual, 0) / 3;
    let soma = av.reduce((total, atual) => total + atual, 0)

    if(media) {
        mediaEl.innerHTML = `A sua media é: ${media.toFixed(1)}`
        if(media >= 6) {
            situationEl.innerHTML = "Situação: Aprovado";
        } else {
            situationEl.innerHTML = "Situação: Recuperação";

            if(semvalor.length === 1) {
                faltandoEl.innerHTML = `Você precisa de ${18 - soma} pontos na ${semvalor} para passar`;
            } else if (semvalor.length === 2) {
                faltandoEl.innerHTML = `Você precisa de no minimo ${(18 - soma) / 2} pontos nas ${semvalor} para passar`;
            }
        }
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


