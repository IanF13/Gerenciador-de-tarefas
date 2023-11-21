function adicionarTarefa() {
    var inputTarefa = document.getElementById('tarefa');
    var tarefa = inputTarefa.value.trim();

    if (tarefa !== '') {
        var ulTarefas = document.getElementById('tarefas');
        var li = document.createElement('li');
        li.textContent = tarefa;

        li.onclick = function() {
            li.classList.toggle('completed');
        };

        ulTarefas.appendChild(li);
        inputTarefa.value = '';
    }
}

function limparTudo() {
    var ulTarefas = document.getElementById('tarefas');
    ulTarefas.innerHTML = '';
}
