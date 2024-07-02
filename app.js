const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
}

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
/* loginForm에서 submit이 일어나면 onLoginSubmit함수가 호출된다.

호출될 때 방금 발생한 어떤 정보를 아규먼트로 가지는데 이게 event 파라미터로 가며,

그 정보 속에 preventDefault라는 걸 함수를 사용해 true로 바꿔주면 

브라우저의 기본동작(새로고침 등)을 막는다.
 그래서 더 이상 내용을 입력했을 때 새로고침되지 않고 value가 consolelog됨.  */
