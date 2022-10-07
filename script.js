const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const clear = document.getElementById('apaga-tudo');

const selected = (event) => {
  event.target.className = 'selected';
  for (const item of list.children) {
    if (item !== event.target) {
      item.classList.remove('selected');
    }

  }
}

const completed = (event) => {
  if (event.target.classList[1]) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

const createItem = (props) => {
  const item = document.createElement('li');
  item.addEventListener('click', selected)
  item.addEventListener("dblclick", completed)
  item.innerHTML = props
  list.appendChild(item)
}

button.addEventListener('click', ()=>{
  const item = input.value
  createItem(item)
  input.value = innerHTML = ''
})

clear.addEventListener('click', () => {
  list.innerHTML = ''
})