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

// UV Index
function getUVIndex() {
    var lat = $('#lat').val();
    var lng = $('#lng').val();
    var alt = $('#alt').val();
    var ozone = $('#ozone').val();
    var dt = $('#dt').val();
   
    $.ajax({
      type: 'GET',
      dataType: 'json',
      beforeSend: function(request) {
        request.setRequestHeader('x-access-token', 'a694de294a03ceef2b09ce2aa14f9002');
      },
      url: 'https://api.openuv.io/api/v1/uv?lat=' + lat + '&lng=' + lng + '&alt=' + alt + '&ozone=' + ozone + '&dt=' + dt,
      success: function(uvIndex) {
//handle successful response = Button Color based on UV Index
if (getUVIndex.result.uv <3){
    var uvClass = "uvLow";
} else {
if (getUVIndex.result.uv <6){
    uvClass = "uvMed";
} else {
    uvClass = "uvHigh";
}
console.log(getUVIndex);
console.log(uvLow);
// error: function (uvIndex) {
//     console.log(uvIndex)
//   }
}
}
})
}

//Current day and time 
var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm a')
console.log(currentDate);

//weather per city
var capitalCities = "Sydney Adelaide Melbourne Perth Hobart Brisbane Darwin";
