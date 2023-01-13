// Seleção de elementos
const pergunta = document.querySelector("#pergunta");
const respostas = Array.from(document.querySelectorAll(".escolha__resposta"));

let perguntaAtual = {};
let aceitaRespostas = true;
let placar = 0;
let contadorPergunta = 0;
let perguntasDisponiveis = [];

let perguntas = [
    {
        pergunta: "O irmão da sua mãe é o que do seu pai?",
        alternativa1: "Genro",
        alternativa2: "Sogro",
        alternativa3: "Cunhado",
        alternativa4: "Amigo",
        resposta: 3
    },
    {
        pergunta: "Quantos anos tem o Brasil?",
        alternativa1: "422",
        alternativa2: "522",
        alternativa3: "523",
        alternativa4: "2023",
        resposta: 2
    },
    {
        pergunta: "Em qual continente fica o Brasil",
        alternativa1: "América do Sul",
        alternativa2: "Europa",
        alternativa3: "Africa",
        alternativa4: "América do Norte",
        resposta: 1
    }
];

const bonus = 10;
const maximoPerguntas = 3;
// Funcões
function comecarJogo(){
    contadorPergunta = 0;
}
// Eventos
