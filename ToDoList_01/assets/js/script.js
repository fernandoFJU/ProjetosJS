// Seleção de elementos
const formulario = document.querySelector("#todo-form");
const todo_input = document.querySelector("#todo-input");
const todo_tabela = document.querySelector("#todo-tabela");
const formulario_edicao = document.querySelector("#editar-form");
const editar_input = document.querySelector("#editar-input");
const botao_cancelar_edicao = document.querySelector("#todo-cancelar");
const select_filtro = document.querySelector("#select-filtro");
const input_pesquisa = document.querySelector("#input-pesquisa");
const botao_limpar_pesquisa = document.querySelector("#limpar-pesquisa");

const tabela_tarefas = document.querySelector("#tabela-tarefas");

let valorInputAntigo;

// Funcões
function salvarTarefa(texto){

    const tr_tarefa = document.createElement("tr");
    tr_tarefa.classList.add("tarefa");
    tr_tarefa.classList.add("to-do");

    const infos_tarefa = `
        <td class="tarefa__nome">${texto}</td>
        <td class="tarefa__acoes">
            <button type="button" aria-label="Concluir Tarefa" class="formulario__botao concluir-tarefa">
                <i class="fa-solid fa-check"></i>
            </button>
            <button type="button" aria-label="Editar Tarefa" class="formulario__botao editar-tarefa">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button type="button" aria-label="Apagar Tarefa" class="formulario__botao apagar-tarefa">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </td>`;
    tr_tarefa.innerHTML = infos_tarefa;

    todo_tabela.appendChild(tr_tarefa)

    todo_input.value = "";
    todo_input.focus();
}

function trocaFormulario(){
    
    formulario_edicao.classList.toggle("hide");
    formulario.classList.toggle("hide");
    tabela_tarefas.classList.toggle("hide");
}

function atualizarTarefa(valorNovoInput){

    const tarefas = document.querySelectorAll(".tarefa");

    tarefas.forEach(tarefa => {
        let tarefaTitulo = tarefa.querySelector(".tarefa__nome");

        if (tarefaTitulo.innerText === valorInputAntigo) {
            tarefaTitulo.innerText = valorNovoInput;
        }
    });
}

function buscaTarefa(lista, filtro){

    if(filtro.value.length > 0){
        
        for(var i = 0; i < lista.length; i++){

            var tarefa = lista[i];
            var td_nome = tarefa.querySelector(".tarefa__nome");
            var nome_tarefa = td_nome.textContent;

            var exp_nome = new RegExp(filtro.value, "i");

            if(!exp_nome.test(nome_tarefa)){
                tarefa.classList.add("hide");
            }else{
                tarefa.classList.remove("hide");
            }
        }
    }else{
        for(var i = 0; i < lista.length; i++){

            var tarefa = lista[i];
            tarefa.classList.remove("hide");
        }
    }
}

// Eventos
formulario.addEventListener("submit", (e) => {

    e.preventDefault();
    
    const inputValue = todo_input.value;

    if (inputValue) {
        salvarTarefa(inputValue);
    }
});

todo_tabela.addEventListener("click", (e) => {

    const botao_clicado = e.target
    const linha_tarefa = botao_clicado.closest("tr");

    let tarefa_titulo;

    if (linha_tarefa && linha_tarefa.querySelector(".tarefa__nome")) {
        tarefa_titulo = linha_tarefa.querySelector(".tarefa__nome").innerText;
    }

    if(botao_clicado.classList.contains("concluir-tarefa")){
        linha_tarefa.classList.toggle("concluida");
        linha_tarefa.classList.toggle("to-do");
    }

    if(botao_clicado.classList.contains("editar-tarefa")){

        editar_input.value = tarefa_titulo;
        valorInputAntigo = tarefa_titulo;
        
        trocaFormulario();
    }

    if(botao_clicado.classList.contains("apagar-tarefa")){
        linha_tarefa.classList.add("apagando");
        setTimeout(()=>{
            linha_tarefa.remove()
        }, 200);
    }
});

botao_cancelar_edicao.addEventListener("click", (e) => {
    
    e.preventDefault();
    trocaFormulario();
});

formulario_edicao.addEventListener("submit", (e) => {

    e.preventDefault();

    const valorNovoInput = editar_input.value;

    if(valorNovoInput){
        atualizarTarefa(valorNovoInput);
    }

    trocaFormulario();
});

select_filtro.addEventListener("change", (e) => {

    var tarefas = document.querySelectorAll(".tarefa");

    const filtro = e.target.value;

    if(filtro){
        for (let i = 0; i < tarefas.length; i++) {
            let tarefa = tarefas[i];

            if (!tarefa.classList.contains(filtro)) {
                
                tarefa.classList.add("hide");
            }else{
                tarefa.classList.remove("hide");
            }
        }
    }
    
    if(filtro == "todos"){
        for(let i = 0; i < tarefas.length; i++){

            var tarefa = tarefas[i];
            tarefa.classList.remove("hide");
        }
    }
});

input_pesquisa.addEventListener("keyup", function(evento){
    var tarefas = document.querySelectorAll(".tarefa");

    buscaTarefa(tarefas, this);
});
    