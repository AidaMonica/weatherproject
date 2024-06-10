var lsCityName = localStorage.getItem(currentCityNameKey);

if (lsCityName === null) {
    lsCityName = 'timisoara'
}

var cityButton = document.querySelector(`.${lsCityName}`)
updateWeather(lsCityName, cityButton.innerText)