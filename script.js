const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const clear = document.getElementById('apaga-tudo');
const clearCompleted = document.getElementById('remover-finalizados');
const save = document.getElementById('salvar-tarefas');
const moveUp = document.getElementById('mover-cima');
const moveDow = document.getElementById('mover-baixo');
const removeSelected = document.getElementById('remover-selecionado');

const selectedItem = (event) => {
  event.target.classList.add('selected');
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

const createEvent = () => {
  const listItem = document.querySelectorAll('#lista-tarefas li');
  for (const item of listItem) {
    item.addEventListener('click', selectedItem);
    item.addEventListener('dblclick', completedItem);
  }
}

const createItem = (props) => {
  const item = document.createElement('li');
  item.innerHTML = props;
  list.appendChild(item);
  createEvent();
}

button.addEventListener('click', () => {
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

removeSelected.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
    list.removeChild(selected)
})

save.addEventListener('click', () => {
  const saveList = []
  for (const item of list.children) {
    saveList.push(`<li class='${item.className}'>${item.innerHTML}</li>`);
  }
  localStorage.setItem('list', JSON.stringify(saveList));
})

const createList = (listChanger) => {
  for (const itemList of listChanger) {
    list.insertAdjacentHTML('beforeend', `<li class='${itemList.className}'>${itemList.innerHTML}</li>`);
  }
  createEvent()
}

const changerPosition = (myList, from, to) => {
  myList.splice(to, 0, myList.splice(from, 1)[0]);
  return myList;
}

const move = (props) => {
  const listChanger = [];
  let itemSelected;
  let position;
  for (const item of list.children) {
    listChanger.push(item);
  }
  for (const key in listChanger) {
    if (listChanger[key].classList[0] === 'selected') {
      itemSelected = key
    }
  }
  let parsItemSelectedFromNumber = parseInt(itemSelected)

  if (props === 1) {
    position = parsItemSelectedFromNumber -= 1;
  } else {
    position = parsItemSelectedFromNumber += 1;
  }

  changerPosition(listChanger, itemSelected, position);
  list.innerHTML = '';
  createList(listChanger)
}

moveUp.addEventListener('click', () => {
  move(1)
})
moveDow.addEventListener('click', () => {
  move(0)
})

if (localStorage.key('list')) {
  let listObj = JSON.parse(localStorage.getItem('list'));
  for (const item of listObj) {
    list.insertAdjacentHTML('beforeend', item);
  }
  createEvent()
}