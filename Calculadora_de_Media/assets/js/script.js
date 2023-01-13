// Seleção de elementos
let formulario = document.querySelector("#formulario");
let nota_1 = document.querySelector("#nota1");
let nota_2 = document.querySelector("#nota2");
let nota_3 = document.querySelector("#nota3");
let nota_4 = document.querySelector("#nota4");

const inputs_required = document.querySelectorAll("[required]");

let btn_calcular = document.querySelector("#btnCalcular");
let btn_limpar = document.querySelector("#btnLimpar");

let input_media = document.querySelector("#media");
let input_situacao = document.querySelector("#situacao");

nota_1.focus();

// Funcões
function calcularMedia(n1, n2, n3, n4) {
    const media = (n1+n2+n3+n4) / 4;

    return media
}

function situacaoFinal(media) {
    
    let situacaoFinal = "";

    if (media <= 4) {
        situacaoFinal = "Reprovado(a)";

    }else if(media >= 6){
        situacaoFinal = "Aprovado(a)"

    }else{
        situacaoFinal = "Recuperação"
    }

    return situacaoFinal;
}

function formatarInputSituacao(situacaoFinal){

    switch (situacaoFinal) {
        case "Reprovado(a)":
            input_situacao.classList.add("reprovado");
            input_situacao.classList.remove("aprovado");
            input_situacao.classList.remove("recuperacao");
            break;
        
        case "Aprovado(a)":
            input_situacao.classList.add("aprovado");
            input_situacao.classList.remove("reprovado");
            input_situacao.classList.remove("recuperacao");
            break;
        
        case "Recuperação":
            input_situacao.classList.add("recuperacao");
            input_situacao.classList.remove("reprovado");
            input_situacao.classList.remove("aprovado");
            break;
    
        default:
            break;
    }
}

const tiposDeErro = [
    'valueMissing',
    'rangeOverflow',
    'rangeUnderflow'
]
const mensagens = {
    nota1: {
        valueMissing: "A nota precisa ser digitada",
        rangeOverflow: "Digite um valor entre 0 e 10.0",
        rangeUnderflow: "Digite um valor entre 0 e 10.0",
    },
    nota2: {
        valueMissing: "A nota precisa ser digitada",
        rangeOverflow: "Digite um valor entre 0 e 10.0",
        rangeUnderflow: "Digite um valor entre 0 e 10.0",
    },
    nota3: {
        valueMissing: "A nota precisa ser digitada",
        rangeOverflow: "Digite um valor entre 0 e 10.0",
        rangeUnderflow: "Digite um valor entre 0 e 10.0",
    },
    nota4: {
        valueMissing: "A nota precisa ser digitada",
        rangeOverflow: "Digite um valor entre 0 e 10.0",
        rangeUnderflow: "Digite um valor entre 0 e 10.0",
    },
}

function verificaInput(input){

    let mensagem = "";
    input.setCustomValidity("");

    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagens[input.id][erro];
        }
    });

    const span_mensagem_erro = input.parentNode.querySelector(".mensagem-erro");
    const validadorDeInput = input.checkValidity();

    if (!validadorDeInput) {
        span_mensagem_erro.textContent = mensagem;
    }else{
        span_mensagem_erro.textContent = "";
    }
}

// Eventos
formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    let nota1 = parseFloat(nota_1.value);
    let nota2 = parseFloat(nota_2.value);
    let nota3 = parseFloat(nota_3.value);
    let nota4 = parseFloat(nota_4.value);

    let media = calcularMedia(nota1, nota2, nota3, nota4)

    input_media.value = parseFloat(media);
    input_situacao.value = situacaoFinal(media);
    formatarInputSituacao(input_situacao.value);

    nota_1.focus();
    
});

inputs_required.forEach((input) => {
    input.addEventListener("blur", () => verificaInput(input));
    input.addEventListener("invalid", evento => evento.preventDefault())
});

btn_limpar.addEventListener("click", () => {

    input_media.value = "";
    input_situacao.value = "";
    input_situacao.classList.remove("aprovado");
    input_situacao.classList.remove("recuperacao");
    input_situacao.classList.remove("reprovado");

    nota_1.focus();
})