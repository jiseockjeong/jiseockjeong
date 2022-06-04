$.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=37.5683&lon=126.9778&appid=7c35cf4ba0767ccb11ba3ef3a32014e1&units=metric',
function(
    result){
$(".temp").append(result.main.temp+'ºC');
$(".description").append(result.weather[0].description);
$(".humidity").append(result.main.humidity+'%');
var wiconUrl = '<img src="http://openweathermap.org/img/wn/'+ result.weather[0].icon +'.png" alt ="'+result.weather[0].description+'">'
$(".icon").html(wiconUrl);
$(".wind").append(result.wind.speed+'km/h');
$(".wind-deg").append(result.wind.deg+'º');
let ct = result.dt;

function convertTime(t){
    let ot = new Date(t*1000);
    return ot;
}

let currentTime = convertTime(ct);
$(".time").append(currentTime);
}); 