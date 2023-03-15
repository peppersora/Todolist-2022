// 현재시간 기능
const clock = document.querySelector("#time");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart("2", 0);
  const minutes = String(date.getMinutes()).padStart("2", 0);
  clock.innerText = `${hours} : ${minutes}`;
}
getClock();
setInterval(getClock, 1000);
