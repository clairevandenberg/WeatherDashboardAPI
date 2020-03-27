//search bar
$("#searchBar").on("submit", function () {
    event.preventDefault ();
    getOpenWeather($("#search").val());
});

//Fetching API data on weatherHistory
function getOpenWeather (weatherPerCity) {
let  cityName = weatherPerCity;
let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=2a41be6b56e8918bc7efe98c840f4638";
$.ajax ({
url: queryUrl,
method: "GET"
.done (function (response) {
    console.log(repsonse);
    console.log(response-Runtime);
    weatherHistory(cityName, reponse);
})
})
}

