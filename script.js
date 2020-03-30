//search bar
$("#searchBar").on("submit", function () {
    e.preventDefault ();
    const inputVal = input.value;
});

let inputEl = document.querySelector(".input");
let buttonEl = document.querySelector(".button")
const queryAPI = () => {
    let queryParam = inputEl.vale;
    console.log (queryParam);
}
//Fetching API data on weatherHistory
function getOpenWeather (weatherPerCity) {
let  cityName = weatherPerCity.value
let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
console.log(queryURL);
console.log("Test");

$.ajax ({
url: queryUrl,
method: "GET",
success: (reponse) => {
    console.log(reponse);
},
error: (xhr, status, error) => {
    console.log(`status: ${status}, Error: ${error}`);
}
})
.catch(() => {
    msg.textContnt = " ";
    form.reset();
    input.focus();
});

buttonEl.addEventListener("click", queryAPI);

// .done (function (reponse) {
//     console.log(response);
//     console.log(response-Runtime);
//     weatherHistory(cityName, reponse);
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
});
};

//Current day and time 
var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm a')
console.log(currentDate);

// current city cordinates 
let CurrentCityCordinates = {lat: "-37.81", lon: "144.96"};

//weather per city
var capitalCities = "Sydney Adelaide Melbourne Perth Hobart Brisbane Darwin";

// retreiving weather via loop to generate 5 days worth of weather
function weatherForcast (location, recivedData) {
    $("#forecast").empty()
for (var i = 0; i< 5; i++) {
   $("#forcast").append(cards);
}
}

cityBtn.on("click", fucntion(event){
    event.preventDefault();
    if (input === "Adelaide"){
        var APIkey " "
    }
};

// // retreiving weather data
// const listItems = list.querySelectorAll (".ajax-section.city");
// const listItemsArray = Array.from(listItems);

// if (listemItemsArray.length > 0) {
//     const filterdArray = listItemArray.filter(el => {
//         let content = "";
//         if (inputVal.includes(",")[1].length >2) {
//             inputVal = inputVal.split(",")[0];
//             content = el.querySelector (".city-name span").textContent.toLowerCase();
//         } else {
//             content = el.querySelector(".city-name").dataset.name.toLowerCase ();
//         }
//         return content == inoutVal.toLowerCase();
// })
// };