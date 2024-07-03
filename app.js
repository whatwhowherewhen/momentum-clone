const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; //스트링만 포함된 변수는 대문자로 관습. 
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`; //위와 같은데 백틱기호임. 이게 더 편한듯
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

/* 1.html에서 login-form 밑에 h1이라는 블록을 만들고 히든 클래스를 추가함.
2. 히든 클래스는 css스타일에 display: none으로 정의됨.
3. js에서 html의 h1 정보를 가져오는 greeting 변수 생성
4. username에 input value를 저장하고 loginForm에 히든 클래스 추가하여 로그인 폼 사라지게끔
5. 그리고 h1을 나타내는 greeting의 innerText에 인사+변수값을 주고
6. 보이지 않던 greeting (h1)을 히든 클래스 리무브로 나타나게 함.
7. 이 모든 것은 로그인 폼이 submit되었을 때 일어남   */
