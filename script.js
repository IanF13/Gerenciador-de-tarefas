//Função de editar 
//Função de adicionar tarefa

function adicionarTarefa() {
    var inputTarefa = document.getElementById('tarefa');
    var tarefa = inputTarefa.value.trim();

    if (tarefa !== '') {
        var ulTarefasPendentes = document.getElementById('tarefas-pendentes');
        var li = document.createElement('li');

        
        var divConteudo = document.createElement('div');
        divConteudo.appendChild(document.createTextNode(tarefa));

        
        var btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.classList.add('edit-button'); 
        btnEditar.onclick = function (event) {
            event.stopPropagation(); 
            editarTarefa(divConteudo);
        };
//Função de completar a tarefa 
        
        divConteudo.style.border = '2px solid #3498db';
        divConteudo.style.color = 'black'; 
        divConteudo.style.padding = '10px';
        divConteudo.style.borderRadius = '5px';
        divConteudo.style.position = 'relative'; 

        btnEditar.style.position = 'absolute';
        btnEditar.style.right = '10px'; 
        btnEditar.style.top = '50%'; 
        btnEditar.style.transform = 'translateY(-50%)'; 

        divConteudo.appendChild(btnEditar);
        li.appendChild(divConteudo);

        li.onclick = function () {
            completarTarefa(li);
        };

        ulTarefasPendentes.appendChild(li);
        inputTarefa.value = '';
    }
}

function completarTarefa(tarefa) {
    tarefa.classList.toggle('completed');
    moverTarefa(tarefa);

    var divConteudo = tarefa.querySelector('div');
    var btnEditar = tarefa.querySelector('.edit-button'); 

    if (tarefa.classList.contains('completed')) {
        divConteudo.style.color = '#2ecc71'; 
        btnEditar.style.borderColor = '#2ecc71'; 
    } else {
        divConteudo.style.color = 'black'; 
        btnEditar.style.borderColor = '#3498db'; 
    }
}
//Função de editar conteúdo da tarefa  

function editarTarefa(divConteudo) {
    var novoTexto = prompt('Editar Tarefa:', divConteudo.textContent);

    if (novoTexto !== null) {
        divConteudo.textContent = novoTexto.trim();

        
        divConteudo.parentElement.classList.remove('completed');
        var btnEditar = divConteudo.querySelector('.edit-button');
        btnEditar.style.borderColor = '#3498db';
    }
}
//Adicionar tarefa com ENTER

function adicionarComEnter(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
}
//Função de mover a tarefa para concluido

function moverTarefa(tarefa) {
    var ulTarefasConcluidas = document.getElementById('tarefas-concluidas-hoje');
    var ulTarefasPendentes = document.getElementById('tarefas-pendentes');

    if (tarefa.classList.contains('completed')) {
        
        tarefa.style.border = '';
        tarefa.style.backgroundColor = '';

        ulTarefasConcluidas.appendChild(tarefa);
        verificarConcluidasSemana();
    } else {
        ulTarefasPendentes.appendChild(tarefa);
    }
}
//Função de limpar tudo

function limparTudo() {
    var ulTarefasPendentes = document.getElementById('tarefas-pendentes');
    var ulTarefasConcluidasHoje = document.getElementById('tarefas-concluidas-hoje');
    var ulTarefasConcluidasSemana = document.getElementById('tarefas-concluidas-semana');

    
    ulTarefasPendentes.innerHTML = '';
    ulTarefasConcluidasHoje.innerHTML = '';
    ulTarefasConcluidasSemana.innerHTML = '';

    
    var todasAsTarefas = document.querySelectorAll('li');
    todasAsTarefas.forEach(function (tarefa) {
        tarefa.style.border = '';
        tarefa.style.backgroundColor = '';
    });
}


document.getElementById('limparTudo').addEventListener('click', limparTudo);
