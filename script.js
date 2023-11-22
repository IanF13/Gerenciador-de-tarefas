function adicionarTarefa() {
    var inputTarefa = document.getElementById('tarefa');
    var tarefa = inputTarefa.value.trim();

    if (tarefa !== '') {
        var ulTarefasPendentes = document.getElementById('tarefas-pendentes');
        var li = document.createElement('li');

        // Adicionei uma div para envolver o texto da tarefa e o botão de editar
        var divConteudo = document.createElement('div');
        divConteudo.appendChild(document.createTextNode(tarefa));

        // Adicionei um botão de edição dentro do item da lista
        var btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.classList.add('edit-button'); // Adicionei a classe do botão de editar
        btnEditar.onclick = function(event) {
            event.stopPropagation(); // Impedir que a tarefa seja concluída ao clicar no botão de editar
            editarTarefa(divConteudo);
        };

        // Estilizei a borda azul e o texto preto
        divConteudo.style.border = '2px solid #3498db';
        divConteudo.style.color = 'black'; // Cor preta para o texto
        divConteudo.style.padding = '10px';
        divConteudo.style.borderRadius = '5px';
        divConteudo.style.position = 'relative'; // Permite posicionar o botão de editar de forma absoluta

        // Estilizei o botão de editar
        btnEditar.style.position = 'absolute';
        btnEditar.style.right = '10px'; // Posiciona o botão no canto direito
        btnEditar.style.top = '50%'; // Centraliza verticalmente
        btnEditar.style.transform = 'translateY(-50%)'; // Ajusta para centralizar verticalmente

        divConteudo.appendChild(btnEditar);
        li.appendChild(divConteudo);

        // Adicionei a chamada da função para completarTarefa quando o item for clicado
        li.onclick = function() {
            completarTarefa(li);
        };

        ulTarefasPendentes.appendChild(li);
        inputTarefa.value = '';
    }
}

function completarTarefa(tarefa) {
    tarefa.classList.toggle('completed');
    moverTarefa(tarefa);

    // Adicionei a verificação de conclusão para ajustar a cor do texto
    var divConteudo = tarefa.querySelector('div');
    var btnEditar = tarefa.querySelector('.edit-button'); // Adicionei para encontrar o botão de editar

    if (tarefa.classList.contains('completed')) {
        divConteudo.style.color = '#2ecc71'; // Cor verde para tarefas concluídas
        btnEditar.style.borderColor = '#2ecc71'; // Ajusta a borda do botão de editar
    } else {
        divConteudo.style.color = 'black'; // Cor preta para tarefas não concluídas
        btnEditar.style.borderColor = '#3498db'; // Ajusta a borda do botão de editar
    }
}



function editarTarefa(divConteudo) {
    var novoTexto = prompt('Editar Tarefa:', divConteudo.textContent);
    
    // Verifica se o usuário inseriu um novo texto
    if (novoTexto !== null) {
        divConteudo.textContent = novoTexto.trim();
        
        // Restaura a classe 'completed' e a borda do botão de editar
        divConteudo.parentElement.classList.remove('completed');
        var btnEditar = divConteudo.querySelector('.edit-button');
        btnEditar.style.borderColor = '#3498db';
    }
}
btnEditar.addEventListener('click', function(event) {
    event.stopPropagation(); // Impedir que o clique no botão propague para o item da lista
    editarTarefa(divConteudo);
});




        ulTarefasPendentes.appendChild(li);
        inputTarefa.value = '';
 

function adicionarComEnter(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
}

function moverTarefa(tarefa) {
    var ulTarefasConcluidas = document.getElementById('tarefas-concluidas-hoje');
    var ulTarefasPendentes = document.getElementById('tarefas-pendentes');

    if (tarefa.classList.contains('completed')) {
        // Remove estilos específicos da tarefa antes de movê-la
        tarefa.style.border = '';
        tarefa.style.backgroundColor = '';

        ulTarefasConcluidas.appendChild(tarefa);
        verificarConcluidasSemana();
    } else {
        ulTarefasPendentes.appendChild(tarefa);
    }
}

// Adicionei a função para limpar todas as tarefas
function limparTudo() {
    var ulTarefasPendentes = document.getElementById('tarefas-pendentes');
    var ulTarefasConcluidasHoje = document.getElementById('tarefas-concluidas-hoje');
    var ulTarefasConcluidasSemana = document.getElementById('tarefas-concluidas-semana');

    ulTarefasPendentes.innerHTML = '';
    ulTarefasConcluidasHoje.innerHTML = '';
    ulTarefasConcluidasSemana.innerHTML = '';
}

// Adicionei a chamada da função para limpar todas as tarefas quando o botão é clicado
document.getElementById('limparTudo').addEventListener('click', limparTudo);
