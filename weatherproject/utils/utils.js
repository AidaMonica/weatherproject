function getDayOfWeekName(dt) {
    var dateObj = new Date(dt * 1000);
   
    var dayIndex = dateObj.getDay();


switch (dayIndex) {
    case 0:
        return "Duminica";
    case 1:    
        return "Luni";
    case 2:
        return "Marti";
    case 3:
        return "Miercuri";
    case 4:
        return "Joi";
    case 5:
        return "Vineri";
    case 6:
        return "Sambata";
    default:
        throw "Ziua primita nu corespunde niciunui index de pe obiectul Date."
         
                    
}
}

function getDisplayTime(dt){

    var dateObj = new Date(dt * 1000);
    var hour = dateObj.getHours();
    var minutes = dateObj.getMinutes();

    var displayHour = hour;
    var displayMinutes = minutes;

    if(minutes < 10){
       displayMinutes = "0" + minutes;
}

if(hour < 10){
    displayHour = "0" + hour;
}

return `${displayHour}:${displayMinutes}`

}

