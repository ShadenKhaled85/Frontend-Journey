
/* ================================= VARIABLES =================================  */

// TODAY
let todayName = document.querySelector("#today_date_day_name");
let todayNumber = document.querySelector("#today_date_day_number");
let todayMonth = document.querySelector("#today_date_month");
let todayLocation = document.querySelector("#today_location");
let todayTemp= document.querySelector("#today_temp");
let todayConditionImg = document.querySelector("#today_condition_img");
let todayConditionText = document.querySelector("#today_condition_text");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let windDirection = document.querySelector("#wind_direction");
// let weatherData;

// NEXT DATA
let nextDay = document.getElementsByClassName('next_day_name');
let nextMaxTemp = document.getElementsByClassName('next_max_temp');
let nextMinTemp = document.getElementsByClassName('next_min_temp');
let nextConditionImg = document.getElementsByClassName('next_condition_img');
let nextConditionText = document.getElementsByClassName('next_condition_text');

// SEARCH INPUT
let searchInput = document.querySelector('#search');

// DATE OBJECT
// let date = new Date('2025-05-07');
// console.log(date); // displays today's date and time -> new Date()
// console.log(date.getDate()); 
// console.log(date.toLocaleDateString('en-US',{weekday:"long"})); // (format,object has options) // long option(Wednesday), short option(Wed)
// console.log(date.toLocaleDateString('en-US',{month:"long"})); 

/* ================================= FETCH API DATA =================================  */

async function getWeatherData(citySearchQuery){
    // let weatherResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3b69cc78408a4c8fb18124357250505&q=London&days=3`);
    let weatherResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3b69cc78408a4c8fb18124357250505&q=${citySearchQuery}&days=3`);
    // console.log(weatherResponse);
    let weatherData = await weatherResponse.json();
    // console.log(weatherData);
    return weatherData;
}

/* ================================= DISPLAY TODAY DATA =================================  */

function displayTodayData(data){
    let todayDate = new Date();
    todayName.innerHTML = todayDate.toLocaleDateString('en-US',{weekday:"long"});
    todayNumber.innerHTML = todayDate.getDate();
    todayMonth.innerHTML = todayDate.toLocaleDateString('en-US',{month:"long"});
    todayLocation.innerHTML = data.location.name;
    todayTemp.innerHTML = data.current.temp_c;
    todayConditionImg.setAttribute('src',data.current.condition.icon);
    todayConditionText.innerHTML = data.current.condition.text;
    humidity.innerHTML = data.current.humidity + "%";
    wind.innerHTML = data.current.wind_kph + "km/h";
    windDirection.innerHTML = data.current.wind_dir;
}

/* ================================= DISPLAY NEXT DAYS DATA =================================  */

function displayNextData(data){
    let forecastData = data.forecast.forecastday;
    // console.log(forecastData); // array 3 objects of today and the next 2 days
    // console.log(nextMaxTemp); // array of 2 spans(next_max_temp)
    for(let i=0; i<2; i++){ // i<2 because we will loop on the 2nd and 3rd objects
        let nextDate = new Date(forecastData[i+1].date);
        // console.log(nextDate);
        nextDay[i].innerHTML = nextDate.toLocaleDateString('en-US',{weekday:"long"});
        nextMaxTemp[i].innerHTML = forecastData[i+1].day.maxtemp_c; // i+1 as we will start from i=1
        nextMinTemp[i].innerHTML = forecastData[i+1].day.mintemp_c;
        nextConditionImg[i].setAttribute('src',forecastData[i+1].day.condition.icon);
        nextConditionText[i].innerHTML = forecastData[i+1].day.condition.text;
    }
}

/* ================================= SEARCH =================================  */

searchInput.addEventListener('keyup',function(e){
    // console.log(searchInput.value); // value of entered keys
    let city = searchInput.value.trim();
    if(city.length >= 3){
        startApp(city);
    }
})

/* ================================= START APP =================================  */

// START APP to call all functions
async function startApp(city = 'cairo'){ // default value
    let weatherData = await getWeatherData(city);
    // console.log(weatherData);
    // ERROR OBJECT WHEN LETTERS<3
    if(!weatherData.error){ // if there is no error, display
        displayTodayData(weatherData);
        displayNextData(weatherData);
    }

}
startApp();


// async function getData(){
//     var myData = await fetch('http://api.weatherapi.com/v1/search.json?key=3b69cc78408a4c8fb18124357250505&q=lond')
//     console.log(myData);
//     var response = await myData.json()
//     console.log(response);
// }
// getData();

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];

// // Search function to fetch weather data
// async function search(query) {
//     const response = await fetch(`http://api.weatherapi.com/v1/search.json?key=3b69cc78408a4c8fb18124357250505&q=${query}&days=3`);
    
//     if (response.ok && response.status !== 400) {
//         const data = await response.json();
//         displayCurrent(data.location, data.current);
//         displayAnother(data.forecast.forecastday);
//     }
// }

// // Display current weather
// function displayCurrent(location, current) {
//     if (current != null) {
//         const date = new Date(current.last_updated.replace(" ", "T"));

//         const html = `
//         <div class="today forecast">
//             <div class="forecast-header" id="today">
//                 <div class="day">${days[date.getDay()]}</div>
//                 <div class="date">${date.getDate()} ${monthNames[date.getMonth()]}</div>
//             </div>
//             <div class="forecast-content" id="current">
//                 <div class="location">${location.name}</div>
//                 <div class="degree">
//                     <div class="num">${current.temp_c}<sup>o</sup>C</div>
//                     <div class="forecast-icon">
//                         <img src="https:${current.condition.icon}" alt="" width="90">
//                     </div>
//                 </div>
//                 <div class="custom">${current.condition.text}</div>
//                 <span><img src="images/icon-umberella.png" alt="">20%</span>
//                 <span><img src="images/icon-wind.png" alt="">18km/h</span>
//                 <span><img src="images/icon-compass.png" alt="">East</span>
//             </div>
//         </div>`;

//         document.getElementById("forecast").innerHTML = html;
//     }
// }

// // Display forecast for the next 2 days
// function displayAnother(forecastArray) {
//     let html = "";

//     for (let i = 1; i < forecastArray.length; i++) {
//         const day = new Date(forecastArray[i].date.replace(" ", "T")).getDay();

//         html += `
//         <div class="forecast">
//             <div class="forecast-header">
//                 <div class="day">${days[day]}</div>
//             </div>
//             <div class="forecast-content">
//                 <div class="forecast-icon">
//                     <img src="https:${forecastArray[i].day.condition.icon}" alt="" width="48">
//                 </div>
//                 <div class="degree">${forecastArray[i].day.maxtemp_c}<sup>o</sup>C</div>
//                 <small>${forecastArray[i].day.mintemp_c}<sup>o</sup></small>
//                 <div class="custom">${forecastArray[i].day.condition.text}</div>
//             </div>
//         </div>`;
//     }

//     document.getElementById("forecast").innerHTML += html;
// }

// // Handle search input event
// document.getElementById("search").addEventListener("keyup", (event) => {
//     search(event.target.value);
// });

// // Initial default search
// search("cairo");


