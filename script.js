"use strict";
// @ts-checkl

let inputEl = document.querySelector("#searchInput");
// let buttonEl = document.querySelector(".button");

// DEBUG, DELETE ME LATER.
getOpenWeather("Adelaide");
// dates("currentdate");

function buttonSearches() {
let searchBar = localStorage.getItem("searchBtn");
console.log(searchBar)

// if (searchBar === null) {
//     return; 
// }

    localStorage.setItem("searchBar", Search);
        buttonSearches ();
}

//search bar
$("#submitBtn").on("submit", function (e) {
    e.preventDefault ();

    //Gets what's typed in
    var searchBar = inputEl.value;
    
    //API call with what's typed in
    getOpenWeather(searchBar);
});


//Fetching API data on weatherHistory
function getOpenWeather (cityName) {
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=fe991547b0b791499b6ebb2c115c9743&units=metric"
    console.log(queryURL);
    console.log("Test");

    // Requesting _current_ weather by city name.
    $.ajax ({
        url: queryURL,
        method: "GET",
        error: (xhr, status, error) => {
            console.log(`status: ${status}, Error: ${error}`);
        }
    })
    .then(current => {
        // current weather data
        console.log(current);
        console.log(current.id);

        fillPageCurent(current);
        
        // get forecast by city-id
        return $.ajax({
            type: 'GET',
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=fe991547b0b791499b6ebb2c115c9743&units=metric"
        })
    })
    .then(forecast => {
        // forecast data.
        
        // for each day
        // forecast.list[0].dt
        let date = moment.utc(forecast.list[0].dt * 1000);
        console.log(date.format("DD MMM Y"));
        
        // current weather data
        console.log(forecast);
        console.log(forecast.city.coord);

        fillPageForecast(forecast);
        
        
        // ADELAIDE {lon: 138.6, lat: -34.93}
        
        // Request UV forcast for 5 days by lat/lon
        return $.ajax({
            type: 'GET',
            url: `http://api.openweathermap.org/data/2.5/uvi/forecast?appid=fe991547b0b791499b6ebb2c115c9743&lat=${forecast.city.coord.lat}&lon=${forecast.city.coord.lon}`
        });
    }).then(uv => {
    console.log(uv);
    fillUv(uv);

    fillUv(uvResponse)
    });
}

function fillPageCurent (current) {
 // Displaying data retreived from Open Weather API to HTML
 let date = moment.utc(current.dt * 1000);
        console.log(date.format("DD MMM Y"));
        
 $(".cityName").html("<h1>" + current.name + date.format(" DD MMM Y"));
 $(".wind").text("Wind Speed: " + current.wind.speed);
 $(".humidity").text("Humidity: " + current.main.humidity);
 $(".temperatureF").text("Temperature: " + current.main.temp);
 $(".icon").text("Temperature: " + current.weather[0].icon);

}

function fillPageForecast(forecast) {

var savedWeather = forecast.list;
console.log(savedWeather);
for (let i = 0; i < 4 ; i++) {
    //saving time into variable 
    let forecastDate = moment().add(i + 1, "days").hours(15).minute(0);
    console.log(forecastDate);
    let dateEl= document.getElementById(`date${i}`);
    let temperature= document.getElementById(`temperature${i}`);
    let humidity= document.getElementById(`humidity${i}`);  
    let wind = document.getElementById(`wind${i}`);  
    // let icon = document.getElementById(`icon${i}`);  

for (let j = 0; j < savedWeather.length ; j++){
  console.log(savedWeather[j]);
  if (forecastDate.isBefore (moment.utc(savedWeather[j].dt * 1000))){

dateEl.innerText = moment.utc(savedWeather[j].dt * 1000).format("DD MMM Y");
// icon.innerText = savedWeather[j].weather[0].icon;
temperature.innerText = "Temperature: "+savedWeather[j].main.temp;
humidity.innerText = "Humidity: "+ savedWeather[j].main.humidity + " % ";
wind.innerText = "Wind Speed: "+savedWeather[j].wind.speed;

    break;
  }
}
}
}


function fillUv(uvResponse) {
console.log("test");
document.querySelector(".uvResponse").innerText = " UV Index: " + uvResponse [0].value;

for (let k = 0; k < 4 ; k++) {
let uvResponse= document.getElementById(`fillUv${k}`);
for (let k = 0; k < fillUv.length ; j++){
uvResponse.innerText = "UV Index: "+ uvResponse [0].value;
}
}
}



// function fillUvForecast (value) {
// var uvForecast = [k].value
// console.log(uvForecast);
// for (let k = 0; k < value ; k++){
// console.log(uvForecast[k]);
// }
// }