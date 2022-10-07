const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const clear = document.getElementById('apaga-tudo');
const clearCompleted = document.getElementById('remover-finalizados');
const save = document.getElementById('salver-tarefas');

const selectedItem = (event) => {
  event.target.className = 'selected';
  for (const item of list.children) {
    if (item !== event.target) {
      item.classList.remove('selected');
    }

  }
}

const completedItem = (event) => {
  if (event.target.classList[1]) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

const createItem = (props) => {
  const item = document.createElement('li');
  item.addEventListener('click', selectedItem);
  item.addEventListener("dblclick", completedItem);
  item.innerHTML = props;
  list.appendChild(item);
}

button.addEventListener('click', ()=>{
  const item = input.value;
  createItem(item);
  input.value = innerHTML = '';
})

clear.addEventListener('click', () => {
  list.innerHTML = '';
})

clearCompleted.addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  for (const item of completed) {
    list.removeChild(item)
  }
})

save.addEventListener('click', () => {
  const saveList =  []
  for (const item of list.children) {
    saveList.push(item.innerHTML);
    localStorage.setItem('list', JSON.stringify(saveList));
  }
})