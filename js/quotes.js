const quotes = [
{
    quote: "평범함은 갈망의 대상이 아니라, 회피의 대상이다.",
    author: "조디 포스터",
},
{
    quote: "인생의 목적은 다수의 편에 서는 것이 아니라, 정신 나간 사람들 사이에서 벗어나는 것이다.",
    author: "마르쿠스 아우렐리우스",
},
{
    quote: "시간은 인생의 동전이다. 다른 동전은 없다. 그리고 당신만이 그 동전을 어디에 쓸지 정할 수 있다.다른 이들이 당신 대신 이 동전을 쓰지 않도록 조심하라.",
    author: "칼 샌드버그",
},
{
    quote: "위대함의 대가는 책임감이다.",
    author: "윈스턴 처칠",
},
{
    quote: "부란 인생을 충분히 경험할 수 있는 능력이다.",
    author: "헨리 데이비드 소로",
},
{
    quote: "천 리 길도 한 걸음부터",
    author: "노자",
},
{
    quote: "인생의 비극이란 목표를 이루지 못한 것이 아니라 아무런 목표도 없이 살아가는 것이다.",
    author: "벤자민 메이스",
},
{
    quote: "시간은 케이크 같이 다른 이와 나눌 수 있는 물건이 아니다. 시간은 삶의 핵심이다. 누군가가 당신에게 당신의 시간을 달라고 한다면 분명 그들은 삶의 일부를 요구하고 있는 것이다.",
    author: "앙뜨와네트 보스코",
},
{
    quote: "가고자 하는 길을 택하는 자만이 그 길이 이르는 곳을 택하게 된다. 수단이야말로 목적을 결정한다.",
    author: "헨리 에머슨 파즈딕",
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;