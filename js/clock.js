/*
const clock=document.querySelector("#clock");

function sayHello(){
    console.log("hello");
}
interval: 매번 일어나야하는 무언가
    예를 들어 2초마다 무슨일이 일어나게 하고
    싶다 => 이때 쓰는게 interval!!
    setInterval(sayHello,5000); 5초마다 실행시킴
    setTimeout(sayHello,5000);  새로고침을하고 5초뒤에 실행됨
*/

/* padstrat() 사용법
    "string".padstart(자릿수,추가되는 숫자 또는 문자);
   1. "1".padstart("2",0); =>"01"
   2. "Hello".padend("10",x); => "Helloxxxxx"
*/



 //현재시간 시계만들기 => 매순간 new date object를 만들고 있다..!
const clock=document.querySelector(".header_clock");

function getClock(){
    const date = new Date();
    const hours =String(date.getHours()).padStart("2",0);
    const minutes = String(date.getMinutes()).padStart("2",0);
    const seconds = String(date.getSeconds()).padStart("2",0);
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}
  getClock();
// 존재 유무에 따라 getclock이 한번실행된상태에서 function인 getclock가 1초마다 실행되게 해준것.!
setInterval(getClock,1000);







