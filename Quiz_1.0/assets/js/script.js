// Seleção de elementos
const h2_pergunta = document.querySelector("#pergunta");
const alternativas = document.querySelector(".alternativas");
const numero_questao = document.querySelector("#numero");
const total_questoes = document.querySelector("#total");
const span_placar = document.querySelector("#placar");
const jogo = document.querySelector(".game");

const alternativa_a = document.querySelector('#alternativaA');
const alternativa_b = document.querySelector('#alternativaB');
const alternativa_c = document.querySelector('#alternativaC');
const alternativa_d = document.querySelector('#alternativaD');

let totalQuestoes = 0;
let placar = 0;

const ENDPOINT = "http://localhost:3000/questoes";

// Funcões
async function pegarDados(contador){

    const resposta = await fetch(ENDPOINT);
    const respostaConvertida = await resposta.json();

    atribuirDados(respostaConvertida, contador);
    
    // passar o quantidade de questoes para a variavel
    let qtdQuestoes = (respostaConvertida.length);
    // escrver a qtdQuestoes para total
    total.textContent = parseInt(qtdQuestoes);
}

async function atribuirDados(dados, contador) {

    if(contador >= dados.length) {
        contador = 1;
    }

    // nQuestao.textContent = dados.questoes[contador].numQuestao;
    h2_pergunta.textContent = dados[contador].pergunta;

    let texto_alternativa_a = alternativa_a.querySelector(".alternativa__texto");
    let texto_alternativa_b = alternativa_b.querySelector(".alternativa__texto");
    let texto_alternativa_c = alternativa_c.querySelector(".alternativa__texto");
    let texto_alternativa_d = alternativa_d.querySelector(".alternativa__texto");

    texto_alternativa_a.textContent = dados[contador].alternativaA;
    texto_alternativa_b.textContent = dados[contador].alternativaB;
    texto_alternativa_c.textContent = dados[contador].alternativaC;
    texto_alternativa_d.textContent = dados[contador].alternativaD;
    
    numero.textContent = dados[contador].numQuestao;
    
    // let certa = document.querySelector('#correct')
    // certa.value = dados.questoes[contador].correta
    //console.log(resposta)
}

function proximaQuestao(numQuestao) {

    let proxima = parseInt(numQuestao);
    pegarDados(proxima);
}


function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.getAttribute('data-resposta');
    console.log("Questão " + numeroDaQuestao)
  
    let respostaEscolhida = resposta.querySelector(".alternativa__texto").textContent;
    console.log("RespU " + respostaEscolhida)
  
    // usar o fetch para pegar os dados
    pegarDados(numeroDaQuestao)
  
    /*let respostaCorrect = correct.value
    //console.log(respostaCorrect)
  
    if(respostaEscolhida == respostaCorrect) {
        console.log("Acertou")

        pontos += 10 // pontos = pontos + 10
    } else {
        console.log("Errou!");
    }*/
}

let questaoAtual = 1;
pegarDados(1)
// Eventos
