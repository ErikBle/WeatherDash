$(document).ready(function () {

const apiKey = "&appid=74dbb7cafa12a6c802c05abee24b4cd2"
let pastCity = [];

// Gets past searches from local storage, if any
if( localStorage.getItem("cityName")){
    pastCity = JSON.parse(localStorage.getItem("cityName"));
  }

  //convert dates
  let getDate = function(days){
    let someDate = new Date();
    let numberOfDaysToAdd = days ;
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
  
    let dd = someDate.getDate();
    let mm = someDate.getMonth() + 1;
    let y = someDate.getFullYear();
  
    return mm + " / "+ dd + " / "+ y;
  }
// Ajax call to get the ID of the city & saves to local storage

$('#getWeather').on("click", function(){
    let search = $("#citySearch").val()
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + search + apiKey
    
    // checks to see if pastCity array exists, if not adds the search 
    if(pastCity.includes(search) !== true){
      pastCity.push(search);
      localStorage.setItem("cityName", JSON.stringify(pastCity));
    }

   

    $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function(data){
     
        let cityID = data.id
       

      // 2nd call to get the conditions from the ID
     $.ajax({
       url: "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + apiKey + "&units=metric",
       method: "GET",
     }).then(function(result){
       console.log(result)
     })

    
    })
})













































//DO NOT DELETE
})