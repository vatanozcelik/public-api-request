var cities = ["Hatay", "Istanbul", "New York", "Washington", "Diyarbakir"];
var rand = Math.floor(Math.random() * 5);

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + cities[rand] + "&units=imperial&appid=73104b3c0a246e77a170869f990bb062", 
function(data) {
    console.log(data);

    var name = data.name;

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    var temp = Math.floor(data.main.temp);

    var weather = data.weather[0].main;

    $(".name").append(name);
    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temp").append(temp);
});

