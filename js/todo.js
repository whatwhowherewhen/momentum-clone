const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  /* localStorage.setItem("todos", toDos); //localstorage 하나의 value에 a, b, c로 저장됨. */
  localStorage.setItem("todos", JSON.stringify(toDos));
  // localstrage 하나의 value에 ["a", "b", "c"] 로 저장됨. 사용법만 알겠다..?
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  remove(li);
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
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
