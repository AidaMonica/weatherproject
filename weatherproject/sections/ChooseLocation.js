var bucharest = document.querySelector(".bucharest");
var timisoara = document.querySelector(".timisoara");
var oradea = document.querySelector(".oradea");
var sibiu = document.querySelector(".sibiu");
var arad = document.querySelector(".arad"); 
var currentCityName = document.getElementById("CurrentCityName");



bucharest.addEventListener('click', () => {
    updateWeather("bucharest", bucharest.innerText)
})    
    
timisoara.addEventListener('click', () => {
    updateWeather("timisoara", timisoara.innerText)
    
})
oradea.addEventListener('click', () => {
    updateWeather("oradea", oradea.innerText)
})
sibiu.addEventListener('click', () => {
    updateWeather("sibiu", sibiu.innerText)
})
arad.addEventListener('click', () => {
    updateWeather("arad", arad.innerText)
    
})

function updateWeather(city, displayName){
    localStorage.setItem(currentCityNameKey, city)
    currentCityName.innerHTML = displayName
    displayWeather(city)
    displayWeatherForcast(city);


}
