const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
// const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos'

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    // 여기서 todo는 todos 배열 속 각각의 데이터를 말한다.
    // 즉 해당 li를 제외한 나머지 li는 남겨두게 하겠다는 뜻
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    // html 리스트 요소 추가
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText='✔';
    button.addEventListener('click', deleteToDo);
    // li 안에 span요소를 추가
    li.appendChild(span);
    li.appendChild(button);
    // ul안에 리스트 내용 추가
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // todo리스트 생성
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
  }

  toDoForm.addEventListener("submit", handleToDoSubmit);

  const savedToDos = localStorage.getItem(TODOS_KEY);
  if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);

    //  화살표함수
    //  parsedToDos.forEach((item) => console.log("this is the turn of", item));
    
    //  위와 같은 기능을 함
    //  function sayHello(item) {
    //      console.log('this is the turn of', item);
    //  }
    
    
  }

