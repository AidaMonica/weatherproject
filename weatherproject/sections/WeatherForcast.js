function displayWeatherForcast(city){

    var url = getForcastUrl(city);


    fetch(url)
    .then((response) => response.json())
    .then((data) => {

        const {list} = data;

        var dayToMesurementsMap = {};

        list.forEach((measurement) => {

            const { dt } = measurement;
            var dayOfWeekName = getDayOfWeekName(dt);


            if(dayToMesurementsMap[dayOfWeekName]) {
                dayToMesurementsMap[dayOfWeekName].push(measurement);
            } else {
                dayToMesurementsMap[dayOfWeekName] = [measurement];
        }
    });
    

    var weatherForcastContainer = document.querySelector(".weather-forecast");
    weatherForcastContainer.innerHTML = '';
    for(day in dayToMesurementsMap) {

        weatherForcastContainer.innerHTML += `<h3 class="text-primay">${day}</h3>`; 
    
         
        dayToMesurementsMap[day].forEach((dayMesurement) => {
            const {dt, weather, main} = dayMesurement;

            var displayTime = getDisplayTime(dt);
            var weatherIcon = getCurrentWeatherIcon(weather[0].icon);
            var temperature = Math.round(main.temp)
            var description = weather[0].description;
            var realFeel = Math.round(main.feels_like);
           
            weatherForcastContainer.innerHTML += `<div class="d-flex justify-content-around border p-2 align-items-center m-4">
            <p>${displayTime}</p>
            <img src='${weatherIcon}'  />
            <strong class="fs-5">${temperature}°C</strong>
            <p>${description}</p>
            <p>
            Real feel:<strong>${realFeel}°C</strong>
            </p>
            </div>`
            
            
        });


        
        
    
    }



        
        
});

}

