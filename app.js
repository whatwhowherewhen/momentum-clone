const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; //스트링만 포함된 변수는 대문자로 관습.
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY); //지역변수 username 값과 동일할 것임

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(username);
}

function paintGreeting(username) {
  //사실 파라미터 username이름은 중요하진 않음
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

loginForm.addEventListener("submit", onLoginSubmit);

if (savedUsername === null) {
  // "null" 아님 주의
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}

/* 
loginForm에서 submit이 되면 onLoginSubmit 함수가 호출된다. 이때 파라미터를 event라고 해놓고 event 객체를 이용해 브라우저 기본행동을 preventDefault()로 막아놓는다. username 지역변수를 하나 만들고 여기에 loginInput.value을 저장한다. 

localstorage에 USERNAME_KEY 라는 이름의 키를 만들고 거기에 지역변수 username에 저장된 값을 넣는다.
그리고 로그인 폼에 히든 클래스를 추가하며 안보이게 만들고 paintGreeting함수를 아규먼트 username으로 호출한다. 

paintGreeting은 h1을 보이게 하는 함수이다. greeting에 히든 클래스를 삭제하고 안에다가 텍스트를 준다. 

localstorage는 웹 창을 새로고침하던, 콘솔창을 새로하던 브라우저 안의 storage로 지워지지 않는다. 만약 savedUsername 값이 존재한다면 바로 paintGreeting 호출하고, 비어있으면 로그인 폼 보인다.

여기서는 아규먼트 savedUsername으로 호출된다. savedUsername은 local storage의 키인 USERNAME_KEY의 value을 말한다. (지역변수 username과 동일)

*/
