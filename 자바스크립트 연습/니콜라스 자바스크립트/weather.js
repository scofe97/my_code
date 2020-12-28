const weather = document.querySelector(".js-weather")

const API_KEY = "e43dc50f85d6cc4915301ea537c13481"
const COORDS = "coords";

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        // API링크를 이용해 사용하는거임 
    ).then(function(response){
        // 데이터가 완전히 들어온다음 실행한다
        // 이렇게 하지 않고 하면 패치를 무시하고 명령이 실행되서 패치가 제대로 안될수 있음
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
    // 위도 경도 저장
}

function handleGeoError(){
    console.log("Cant access geo location")

}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        latitude,
        longitude
    };
    saveCoords(coordsObj)
    getWeather(latitude,longitude)
    // 지역정보 ( 위도 경도 )를 통해 날씨를 알아봄
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
    // 지역정보를 읽어온다.
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if ( loadedCoords === null){
        askForCoords();
    }else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude)
    }
}

function init(){
    loadCoords();
}

init();