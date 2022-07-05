const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  //padstart(a,b)로 기준으로 a에 들어가는 숫자는 길이이며 b는 변수의 길이가 a에 충족되지 못할시 앞부분에다 b를 채워주는것이다. 
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);