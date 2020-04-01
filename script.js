"use strict";
// @ts-checkl

let inputEl = document.querySelector("#searchInput");
let buttonEl = document.querySelector(".button")

// DEBUG, DELETE ME LATER.
getOpenWeather("Adelaide");
date("current date");

//search bar
$("#searchBar").on("submit", function (e) {
    e.preventDefault ();
    getOpenWeather(inputEl.value);
    return getOpenWeather
    }); 


const queryAPI = () => {
    let queryParam = inputEl.vale;
    console.log (queryParam);
}

//Fetching API data on weatherHistory
function getOpenWeather (cityName) {
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=fe991547b0b791499b6ebb2c115c9743";
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
        console.log(current)
        console.log(current.id)
        
        // get forecast by city-id
        return $.ajax({
            type: 'GET',
            url: "api.openweathermap.org/data/2.5/forecast?" + cityName + "&appid={fe991547b0b791499b6ebb2c115c9743}"
        })
    })
    .then(forecast => {
        // forecast data.
        
        // for each day
        // forecast.list[0].dt
        let date = moment.utc(forecast.list[0].dt * 1000);
        console.log(date.format("DDD MMM Y"));
        
        // current weather data.
        console.log(forecast);
        console.log(forecast.city.coord);
        
        // ADELAIDE {lon: 138.6, lat: -34.93}
        
        // Request UV forcast for 5 days by lat/lon
        return $.ajax({
            type: 'GET',
            url: "http://api.openweathermap.org/data/2.5/uvi/forecast?appid={appid}&lat={lat}&lon={lon}&cnt={cnt}" + forecast.city.coord.lat,
        })
    })

    .then(uv => {
    // uv data
    console.log(uv);
    })
    
    //store data in an object 
    .then(function(response) {
    console.log(queryURL);
    console.log(response);

    
    // Displaying data retreived from Open Weather API to HTML
    $(".cityName").html("<h1>" + response.name + date);
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);

    // transfer to fahrenheit
 var temperatureF = (response.main.temp -273.15) * 1.80 + 32;

    console.log("wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    console.log("Temperature: " + temperatureF);
    })

// DATES retreiving 5 DAYS using moment 
function dates () {
    // today 
    var today = moment().format('dddd, MMMM Do YYYY, h:mm a')
    console.log(date.format("DDD MMM Y"));
    //loop for 5 days
    let fiveDays = []
for (i = 1; i > 5 ; i++) {
    fiveDays [i] = moment().add(i).format ('DDD MMM Y')
    $(".date" + i).text(fiveDays[i])
}
}




// // Pesudo Code
// Search Bar 
// Fetch API = console.log(test)
// Current City Weather = Console.log(current)
// Forecast Data = Console.log(Forecast)
// UV Forecast = Console.log(UV)

// Request Adelaide in Search Bar 
// Get Current Day 
// temp 
// UV index
// Humidity 
// Wind speed
// Get 5 day forecast on 5 SVGPathSegCurvetoQuadraticSmoothAbs. Current Date Temp Humidity Image. 










    // .catch(() => {
    //     msg.textContnt = " ";
    //     form.reset();
    //     input.focus();
    // });

    // buttonEl.addEventListener("click", queryAPI);

    // .done (function (reponse) {
    //     console.log(response);
    //     console.log(response-Runtime);
    //     weatherHistory(cityName, reponse);



// // UV Index
// function getUVIndex() {
//     var lat = $('#lat').val();
//     var lng = $('#lng').val();
//     var alt = $('#alt').val();
//     var ozone = $('#ozone').val();
//     var dt = $('#dt').val();
   
//     $.ajax({
//         type: 'GET',
//         dataType: 'json',
//         beforeSend: function(request) {
//             request.setRequestHeader('x-access-token', 'fe991547b0b791499b6ebb2c115c9743');
//         },
//         // url: "https://api.openweathermap.org/data/2.5/forcast/uv?lat=" + lat + "&lon=" + lon + "appid=fe991547b0b791499b6ebb2c115c9743"
//         url: 'https://api.openuv.io/api/v1/uv?lat=' + lat + '&lng=' + lng + '&alt=' + alt + '&ozone=' + ozone + '&dt=' + dt,
//         success: function(response) {
//             console.log(response);
//             console.log(response.data.results[0].value);
//             //handle successful response = Button Color based on UV Index
//             if (getUVIndex.result.uv <3){
//                 var uvClass = "uvLow";
//             } else {
//             if (getUVIndex.result.uv <6){
//                 uvClass = "uvMed";
//             } else {
//                 uvClass = "uvHigh";
//             }
//             console.log(getUVIndex);
//             console.log(uvLow);
//             // error: function (uvIndex) {
//             //     console.log(uvIndex)
//             //   }
//             }
//         }
//     });
// }

// //Current day and time 
// var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm a')
// console.log(currentDate);

// // current city cordinates 
// let CurrentCityCordinates = {lat: "-37.81", lon: "144.96"};

// //weather per city
// var capitalCities = "Sydney Adelaide Melbourne Perth Hobart Brisbane Darwin";

// // retreiving weather via loop to generate 5 days worth of weather
// function weatherForcast (location, recivedData) {
//     $("#forecast").empty()
//     for (var i = 0; i< 5; i++) {
//         $("#forcast").append(cards);
//     }
// }

// cityBtn.on("click", function(event){
//     event.preventDefault();
//     if (input === "Adelaide"){
//         var APIkey = " ";
//     }
// });

// // // retreiving weather data
// // const listItems = list.querySelectorAll (".ajax-section.city");
// // const listItemsArray = Array.from(listItems);

// // if (listemItemsArray.length > 0) {
// //     const filterdArray = listItemArray.filter(el => {
// //         let content = "";
// //         if (inputVal.includes(",")[1].length >2) {
// //             inputVal = inputVal.split(",")[0];
// //             content = el.querySelector (".city-name span").textContent.toLowerCase();
// //         } else {
// //             content = el.querySelector(".city-name").dataset.name.toLowerCase ();
// //         }
// //         return content == inoutVal.toLowerCase();