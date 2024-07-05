const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
//정확한 이미지 파일 이름을 적는 것 만으로 가져올 수 있다.
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//img 요소를 메모리 내에 생성
bgImage.src = `img/${chosenImage}`;
//메모리 내의 img 요소의 src 속성을 설정
document.body.appendChild(bgImage);
//메모리 속 img 요소를 html 문서의 body 요소의 마지막 자식 요소로 추가.
// prepend 하면 body 요소의 첫번째 자식 요소로 추가.

/* html에 <imag src="img/0.jpeg">적는 것과 같다. */
