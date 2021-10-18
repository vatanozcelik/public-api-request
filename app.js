var cities = ["Adana","Adiyaman","Afyon","Agri","Aksaray","Amasya","Ankara","Antalya","Ardahan","Artvin","Aydin","Balikesir","Bartin","Batman","Bayburt","Bilecik","Bingol","Bitlis","Bolu","Burdur","Bursa","Canakkale","Cankiri","Corum","Denizli","Diyarbakir","Duzce","Edirne","Elazig","Erzincan","Erzurum","Eskisehir","Gaziantep","Giresun","Gumushane","Hakkari","Hatay","Igdir","Isparta","Istanbul","Izmir","Kahramanmaras","Karabuk","Karaman","Kars","Kastamonu","Kayseri","Kilis","Kirikkale","Kirklareli","Kirsehir","Kocaeli","Konya","Kutahya","Malatya","Manisa","Mardin","Mersin","Mugla","Mus","Nevsehir","Nigde","Ordu","Osmaniye","Rize","Sakarya","Samsun","Sanliurfa","Siirt","Sinop","Sirnak","Sivas","Tekirdag","Tokat","Trabzon","Tunceli","Usak","Van","Yalova","Yozgat","Zonguldak"];
console.log(cities.length);
var rand = Math.floor(Math.random() * 81);

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

