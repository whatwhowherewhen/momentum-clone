const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  /* localStorage에 배열을 저장했다가 getItem으로 꺼내고 쓸거다. 근데 localStorage는 배열을 자체를 고대로 저장시키지 못하고 안에 내용물만 문자로 저장시킨다. 따라서  JSON.stringify()로 배열을 문자화해서 저장시킬거다. 그리고 JSON.parse(문자열이 된 배열)을 하면 문자열 떼고 다시 배열 객체로 만든다. 
 ["a","b","c"] => "["a","b","c"]" => ["a","b","c"]
 */
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove(); //UI에서만 사라지고 li 변수는 존재한다..
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //여기 (toDo) 이름은 뒤 조건에 맞게 toDos 배열을 변형한 새로운 배열이다(기존배열은 그대로 두고)
  //li.id 는 문자열이고 toDo.id는 숫자형이다.
  saveToDos(); // 이거까지 해야 localstorage도 업데이트되겠지
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id; //근데 string 타입으로 저장되네. 주의
  // html element에 한해서 모든 속성 값이 문자열만 허용한다네.
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  saveToDos();
  paintToDo(newTodoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  /*  parsedToDos.forEach(sayHello); */
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

/* filter function 은 원래 배열에서 조건에 따라 몇 개 제외하고 새로운 배열을 제공한다.
function sexyFilter(item){return item !== 3} -> item이 3이 아니면 true를 return!
[1,2,3,4,5].filter(sexyFilter)
(4) [1, 2, 4, 5]

const arr = ["pizza", "banana", "tomato"] -> arr 배열에서 banana를 지우고 싶음!
function sexyFilter(food){return food !== "banana"}
arr.filter(sexyFilter)
(2) ['pizza', 'tomato']

const todos = [{text:"lalala"}, {text:"lololo"}]
function sexyFilter(todo){return todo.text != "lololo"}
todos.filter(sexyFilter)
[{…}]0: {text: 'lalala'} length: 1 [[Prototype]]: Array(0)

*/
