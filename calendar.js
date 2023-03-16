// 1. 달력 출력하기
var currentTitle = document.getElementById("current-year-month");
var calendarBody = document.getElementById("calendar-body");

var today = new Date();
var first = new Date(today.getFullYear(), today.getMonth(), 1);
var dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// 윤년
var leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// 윤년이 아닐때
var notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var pageFirst = first;
var pageYear;
// 윤년 확인하기
if (first.getFullYear() % 4 === 0) {
  pageYear = leapYear;
} else {
  pageYear = notLeapYear;
}

// 캘린더 보여주기기능
function showCalendar() {
  let monthCnt = 100;
  let cnt = 1;
  // i<6 일때, i=5까지 => 한주(row)
  for (var i = 0; i < 6; i++) {
    var tr = document.createElement("tr");
    tr.setAttribute("id", monthCnt);
    // j<7일때, j=6까지 => 매일(day)
    for (var j = 0; j < 7; j++) {
      var td = document.createElement("td");
      if ((i === 0 && j < first.getDay()) || cnt > pageYear[first.getMonth()]) {
        tr.appendChild(td);
      } else {
        td.textContent = cnt;
        td.setAttribute("id", cnt);
        tr.appendChild(td);
        cnt++;
      }
    }
    monthCnt++;
    calendarBody.appendChild(tr);
  }
}
showCalendar();
// 추후 달력 업데이트
function removeCalendar() {
  let catchTr = 100;
  for (var i = 100; i < 106; i++) {
    var tr = document.getElementById(catchTr);
    tr.remove();
    catchTr++;
  }
}

// 2. 이전달과 다음달로 이동
function prev() {
  inputBox.value = "";
  const divs = document.querySelectorAll("#input-list > div");
  divs.forEach(function (e) {
    e.remove();
  });
  const btns = document.querySelectorAll("#input-list > button");
  btns.forEach(function (e1) {
    e1.remove();
  });
  if (pageFirst.getMonth() === 1) {
    pageFirst = new Date(first.getFullYear() - 1, 12, 1);
    first = pageFirst;
    if (first.getFullYear() % 4 === 0) {
      pageYear = leapYear;
    } else {
      pageYear = notLeapYear;
    }
  } else {
    pageFirst = new Date(first.getFullYear(), first.getMonth() - 1, 1);
    first = pageFirst;
  }
  today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
  currentTitle.innerHTML =
    monthList[first.getMonth()] +
    "&nbsp;&nbsp;&nbsp;&nbsp;" +
    first.getFullYear();
  removeCalendar();
  showCalendar();
  showMain();
  clickedDate1 = document.getElementById(today.getDate());
  clickedDate1.classList.add("active");
  clickStart();
  reshowingList();
}

function next() {
  inputBox.value = "";
  const divs = document.querySelectorAll("#input-list > div");
  divs.forEach(function (e) {
    e.remove();
  });
  const btns = document.querySelectorAll("#input-list > button");
  btns.forEach(function (e1) {
    e1.remove();
  });
  if (pageFirst.getMonth() === 12) {
    pageFirst = new Date(first.getFullYear() + 1, 1, 1);
    first = pageFirst;
    if (first.getFullYear() % 4 === 0) {
      pageYear = leapYear;
    } else {
      pageYear = notLeapYear;
    }
  } else {
    pageFirst = new Date(first.getFullYear(), first.getMonth() + 1, 1);
    first = pageFirst;
  }
  today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
  currentTitle.innerHTML =
    monthList[first.getMonth()] +
    "&nbsp;&nbsp;&nbsp;&nbsp;" +
    first.getFullYear();
  removeCalendar();
  showCalendar();
  showMain();
  clickedDate1 = document.getElementById(today.getDate());
  clickedDate1.classList.add("active");
  clickStart();
  reshowingList();
}
// 3.클릭하면 날짜 색상 변경
function showMain() {
  var mainMonth = document.querySelector("#main-month");
  var mainTodayDay = document.querySelector("#main-day");
  var mainTodayDate = document.querySelector("#main-date");
  mainTodayDay.innerHTML = ` ${dayList[today.getDay()]},`;
  mainMonth.innerHTML = `${monthList[today.getMonth()]}`;
  mainTodayDate.innerHTML = `${today.getDate()}`;
}
var clickedDate1 = document.getElementById(today.getDate());
console.log(clickedDate1);
clickedDate1.classList.add("active");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
console.log(prevBtn);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
var tdGroup = [];
function clickStart() {
  for (let i = 1; i <= pageYear[first.getMonth()]; i++) {
    tdGroup[i] = document.getElementById(i);
    tdGroup[i].addEventListener("click", changeToday);
  }
}
function changeToday(e) {
  for (let i = 1; i <= pageYear[first.getMonth()]; i++) {
    if (tdGroup[i].classList.contains("active")) {
      tdGroup[i].classList.remove("active");
    }
  }
  clickedDate1 = e.currentTarget;
  clickedDate1.classList.add("active");
  today = new Date(today.getFullYear(), today.getMonth(), clickedDate1.id);
  showMain();
  keyValue = today.getFullYear() + "" + today.getMonth() + "" + today.getDate();
  reshowingList();
}
// 4. todolist
function reshowingList() {
  keyValue = today.getFullYear() + "" + today.getMonth() + "" + today.getDate();
  if (todoList[keyValue] === undefined) {
    inputList.textContent = "";
    todoList[keyValue] = [];
    const divs = document.querySelectorAll("#input-list > div");
    divs.forEach(function (e) {
      e.remove();
    });
    const btns = document.querySelectorAll("#input-list > button");
    btns.forEach(function (e1) {
      e1.remove();
    });
  } else if (todoList[keyValue].length === 0) {
    inputList.textContent = "";
    const divs = document.querySelectorAll("#input-list > div");
    divs.forEach(function (e) {
      e.remove();
    });
    const btns = document.querySelectorAll("#input-list > button");
    btns.forEach(function (e1) {
      e1.remove();
    });
  } else {
    const divs = document.querySelectorAll("#input-list > div");
    divs.forEach(function (e) {
      e.remove();
    });
    const btns = document.querySelectorAll("#input-list > button");
    btns.forEach(function (e1) {
      e1.remove();
    });
    var div = document.createElement("div");
    for (var i = 0; i < todoList[keyValue].length; i++) {
      var div = document.createElement("div");
      div.textContent = "-" + todoList[keyValue][i];
      var btn = document.createElement("button");
      btn.setAttribute("type", "button");
      btn.setAttribute("id", "del-ata");
      btn.setAttribute("id", dataCnt + keyValue);
      btn.setAttribute("class", "del-data");
      btn.textContent = delText;
      inputList.appendChild(div);
      inputList.appendChild(btn);
      div.addEventListener("click", checkList);
      btn.addEventListener("click", deleteTodo);
      inputBox.value = "";
      function deleteTodo() {
        div.remove();
        btn.remove();
      }
    }
  }
}
var inputBox = document.getElementById("input-box");
var inputDate = document.getElementById("input-data");
var inputList = document.getElementById("input-list");
var delText = "X";
inputDate.addEventListener("click", addTodoList);
var dataCnt = 1;
var keyValue =
  today.getFullYear() + "" + today.getMonth() + "" + today.getDate();
let todoList = [];
todoList[keyValue] = [];
function addTodoList() {
  var div = document.createElement("div");
  div.textContent = "-" + inputBox.value;
  var btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.setAttribute("id", "del-ata");
  btn.setAttribute("id", dataCnt + keyValue);
  btn.setAttribute("class", "del-data");
  btn.textContent = delText;
  inputList.appendChild(div);
  inputList.appendChild(btn);
  todoList[keyValue].push(inputBox.value);
  dataCnt++;
  inputBox.value = "";
  div.addEventListener("click", checkList);
  btn.addEventListener("click", deleteTodo);
  function deleteTodo() {
    div.remove();
    btn.remove();
  }
}
console.log(keyValue);
function checkList(e) {
  e.currentTarget.classList.add("checked");
}
