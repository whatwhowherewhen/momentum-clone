const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  /* localStorage에 배열을 저장했다가 getItem으로 꺼내고 쓸거다. 근데 localStorage는 배열을 자체를 고대로 저장시키지 못하고 안에 내용물만 문자로 저장시킨다. 따라서  JSON.stringify()로 배열을 문자화해서 저장시킬거다. 그리고 JSON.parse(문자열이 된 배열)을 하면 문자열 떼고 다시 배열 객체로 만든다. 
 ["a","b","c"] => "["a","b","c"]" => ["a","b","c"]
 */
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  saveToDos();
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/* function sayHello(item) {
  console.log("This is turn of ", item);
} */

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  /*  parsedToDos.forEach(sayHello); */
  parsedToDos.forEach((item) => console.log("this is the turn of ", item));
}
