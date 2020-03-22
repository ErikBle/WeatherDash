$(document).ready(function () {

const apiKey = "&appid=74dbb7cafa12a6c802c05abee24b4cd2"
const pastCity = [];

// Gets past searches from local storage, if any
if( localStorage.getItem("citySearch")){
    searchedCities = JSON.parse(localStorage.getItem("citySearch"));
  }

// Ajax call to get the current conditions

$('#getWeather').on("click", function(){
    let search = $("#citySearch").val()
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + search + apiKey

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(data){
        console.log(data)

    })
    

})













































//DO NOT DELETE
})