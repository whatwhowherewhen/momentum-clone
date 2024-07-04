const clock = document.querySelector("h2#clock"); //h2 #clock은 XgetClock
function getClock() {
  /* Date는 기본적으로 제공되는 생성자 함수이다. 그냥 Date();를 하면 현재 날짜와 시간을 문자열로 반환하지만 new Date(); 할 경우에는 새로운 Date 객체로 반환한다. */
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //String으로 감싸서 숫자형을 문자형으로 바꿈

  /* 문자열.padStagrt(문자열길이설정, "앞에 채울문자")
문자열의 길이가 설정보다 작으면 앞쪽을 문자로 채움 */

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); //5000ms = 5s, setInterval은 계속 실행

/* setTimeout(sayHello, 5000); // setTimeout은 한번만 실행 */
