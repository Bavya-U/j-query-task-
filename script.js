$(document).ready(function() {
    const weatherData = {
        "Orathanadu": {
            temp: 25,
            description: "Sunny",
            humidity: 50,
            windSpeed: 10
        },
        "Thanjavur": {
            temp: 30,
            description: "Clear sky",
            humidity: 20,
            windSpeed: 5,
            
        },
        "Chennai": {
            temp: 20,
            description: "Partly cloudy",
            humidity: 60,
            windSpeed: 15
        },
        "Trichy": {
            temp: 28,
            description: "Thunderstorm",
            humidity: 70,
            windSpeed: 20
        }
        };
    
$('#search-btn').on('click', function() {
    const city = $('#city-input').val();
    if (city && weatherData[city]) {
        displayWeather(city, weatherData[city]);
    } else {
        alert('City not found!');
    }
});

function displayWeather(city, data) {
    updateCityName(city);
    updateTemperature(data.temp);
    updateDescription(data.description);
    updateHumidity(data.humidity);
    updateWindSpeed(data.windSpeed);
}

function updateCityName(city) {
    $('#city-name').text(city);
}

function updateTemperature(temp) {
    $('#temperature').text(`Temperature: ${temp} °C`);
}

function updateDescription(description) {
    $('#description').text(`Description: ${description}`);
}

function updateHumidity(humidity) {
    $('#humidity').text(`Humidity: ${humidity} %`);
}

function updateWindSpeed(windSpeed) {
    $('#wind-speed').text(`Wind Speed: ${windSpeed} m/s`);
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    $('#current-time').text(`Current Time: ${currentTime}`);
}
setInterval(updateTime, 1000);
});





















// // var document = "Bavya";
// // $(document).ready(function () {
// //     $("button").click(function () {
// //         $("h1").hide();
// //         $("p").hide();
// //         $("h3").hide();
// //     });
// // });


// $(document).ready(function () {
//     $("#hideButton").click(function () {
//         $("h1, p").hide();
//     });
//     $("#showButton").click(function () {
//         $("h1, p").show();
//     });
// });
