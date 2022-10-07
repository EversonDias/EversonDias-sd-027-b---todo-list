const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');

const createItem = (props) => {
  const item = document.createElement('li');
  item.innerHTML = props
  list.appendChild(item)
}

button.addEventListener('click', ()=>{
  const item = input.value
  createItem(item)
  input.value = innerHTML = ''
})
