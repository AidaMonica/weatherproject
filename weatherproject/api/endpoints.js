var apiKey = "047846a12929ac073e1ad801907af216";
var units = 'metric'
var language = 'ro';

function getCurrentWeatherEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${language}`
}

function getCurrentWeatherIcon(iconCode){
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

function getForcastUrl(city){
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}&lang=${language}`
}
