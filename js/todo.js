const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  const li = event.target.parentElement;
  /* submit되고 paintToDo가 호출될 때 새로운 li가 생겨나고
      span과 버튼이 li 속에 생겨난다.
      버튼이 클릭될 때 많은 정보를 아규먼트 event로 하여 deleteToDo 호출하고
      event 정보 속 target 안에 parentElement라는게 있으며 이는 해당하는 li 요소 이다.
     따라서 각 버튼을 누름으로써 li 단위로 삭제할 수 있는 것 */
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
  toDoInput.value = ""; //newTodo 에는 영향 없어
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
