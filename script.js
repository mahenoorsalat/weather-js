const UpdateUi = (data) =>{
    const weatherCondition = data.weather[0].main;

    document.querySelector('h1 span').textContent = data.main.temp;
    document.querySelector(".Name").textContent = data.name;
    document.querySelector(".humid").textContent = data.main.humidity;
    document.querySelector(".speed").textContent = data.wind.speed;

    if (weatherCondition === "Mist") {
        document.querySelector('.image1').src = "weather-app-img/images/mist.png";
        console.log("It's misty outside!");
    } else if (weatherCondition === "Snow") {
        document.querySelector('.image1').src = "weather-app-img/images/snow.png";
        console.log("It's snowing!");
    } else if (weatherCondition === "Rain") {
        document.querySelector('.image1').src = "weather-app-img/images/rain.png";
        console.log("It's raining!");
    } else if (weatherCondition === "Drizzle") {
        document.querySelector('.image1').src = "weather-app-img/images/drizzle.png";
        console.log("There's a drizzle.");
    } else if (weatherCondition === "Clouds") {
        document.querySelector('.image1').src = "weather-app-img/images/clouds.png";
        console.log("It's cloudy.");
    } else if (weatherCondition === "Clear") {
        document.querySelector('.image1').src = "weather-app-img/images/clear.png";
        console.log("It's a clear day.");
    } else {
        document.querySelector('.image1').src = "weather-app-img/images/clear.png"; 
        console.log("Weather condition not identified.");
    }
}

const API_KEY = "bcda10ba323e88e96cb486015a104d1d";

const fetchWeather = async () => {
const city = document.querySelector('input').value;
if(city=== ""){
    alert("Please Enter Your City name!")
}
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    UpdateUi(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

document.querySelector('.search').addEventListener('click' , fetchWeather)


window.onload = () =>{
    const DefaultCity = "Delhi";
    fetchWeather(DefaultCity)
}