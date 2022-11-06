//1. geolocation함수를 사용할 것이고, 이 함수는 위치의 좌표를 알려준다.
// my api : 4d72cd42b82357e8222fd40062dd758a

    const API_KEY = "4d72cd42b82357e8222fd40062dd758a";

function onGeoOk(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((Response) => Response.json())
    .then((data) =>{ 
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText= data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
    //fetch는 promise인데 =>promise는 당장 뭔가 일어나지 않고 시간이 좀 걸린뒤에 일어나는 일 =>then사용
    // console.log("you live in",lat,lng);
}
function onGeoError(){
alert("can't find you. No weather for you.")
}
//getcurrent(successCallback,errorCallback)두개의 인자를 사용
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

/*2. lat,lng를 이용해 알게 된 좌표(숫자)를 장소로 바꿔줄 서비스를 사용해야 한다.
    기본적으로 api는 다른 서버와 이야기 할 수 있는 방법*/