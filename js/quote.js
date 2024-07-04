const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로",
  },
  {
    quote:
      "이미 끝나버린 일을 후회하기 보다는 하고 싶었던 일을 하지 못한 것을 후회하라.",
    author: "탈무드",
  },
  {
    quote: "Siuuuu",
    author: "Cristiano Ronaldo",
  },
  {
    quote:
      "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안된다.",
    author: "단테",
  },
  {
    quote: "사랑받기 보다는 사랑하는 사람이 되어라.",
    author: "스탕달",
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
    author: "찰스 다윈",
  },
  {
    quote:
      "위대한 인물에게는 목표가 있고 평범한 사람들에게는 소망이 있을 뿐이다.",
    author: "워싱턴 어빙",
  },
  {
    quote: "세 사람이 함께 길을 가면 거기에는 반드시 나의 스승이 있다.",
    author: "공자",
  },
  {
    quote: "삶에서 두려워할 것은 아무것도 없다. 다만 이해해야 할 뿐이다.",
    author: "마리 퀴리",
  },
  {
    quote: "20년 후, 당신은 한 일보다 하지 않은 일 때문에 더 실망할 것이다.",
    author: "마크 트웨인",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
/* Math.random()은 x>=0 && x<1 의 난수를 발생시킴  
   0 * n <= x * n < n 이므로 배열길이를 곱합으로써 0부터 배열길이까지의 수(x*n)를 랜덤하게 얻을 수 있음
*/
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
