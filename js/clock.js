const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`)
}
getClock(); //첫 인터벌을 가지고 오는 1초를 당겨오기 위해 들어오자마자 보여주는 작업
setInterval(getClock, 1000);