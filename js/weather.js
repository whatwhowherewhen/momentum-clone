const API_KEY = "c4c935995aaebb95b5589728ec4262a6";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json()) //응답을 JSON으로 변환
    .then((data) => {
      //response.json()에서 반환된 프로미스가 해결되면 JSON데이터가 data 매개변수로 전달됨.
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
  /*  위 방식은 프로미스 체인. 아래는 await 사용코드
   fetch 함수가 비동기 함수라서 네트워크 요청을 보내고 응답을 받는 동안 다른 코드 부분이 실행된다. 하지만 await와 then을 사용함으로써 프로미스(비동기 작업의 결과를 나타내는 객체)가 완료될때 까지 기다린다.

  try {
    const response = await fetch(url); // fetch 함수가 완료될 때까지 대기
    const data = await response.json(); // 응답 데이터를 JSON으로 변환될 때까지 대기
    
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name; // 도시 이름 설정
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; // 날씨 정보 설정
  } catch (error) {
    console.error('Error fetching weather data:', error); // 오류 처리
  }
}
 */
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
