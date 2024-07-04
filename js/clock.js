const clock = document.querySelector("h2#clock"); //h2 #clock은 XgetClock
function getClock() {
  /* Date는 기본적으로 제공되는 생성자 함수이다. 그냥 Date();를 하면 현재 날짜와 시간을 문자열로 반환하지만 new Date(); 할 경우에는 새로운 Date 객체로 반환한다. */
  const date = new Date();

  
   clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

   /* date.getHours()는 객체 속 메서드이며 숫자 형태로 값을 반환한다. ":" 안하려고 이렇게 템플릿 리터럴 로 만들어 date.getHours()의 결과를 문자열로 포함시켰다. */
}

getClock();
setInterval(getClock, 1000); //5000ms = 5s, setInterval은 계속 실행

/* setTimeout(sayHello, 5000); // setTimeout은 한번만 실행 */
