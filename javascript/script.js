const apiKey = "f816d206781b45ea1186ce1a5b9bd05c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityname = document.querySelector(".search input");
const button = document.querySelector(".search .btn");
const informationpanel = document.querySelector(".info")
async function information(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        alert("error: Invalid city name");
        informationpanel.style.display = `none`;
        document.querySelector(".info .name").innerHTML = ``;
        document.querySelector(".info .temp").innerHTML = ``;
        document.querySelector(".info img").src = ``;
        document.querySelector(".info .condition").innerHTML = ``;
    }
    else{

        let data = await response.json();
        document.querySelector(".info .name").innerHTML = data.name;
        document.querySelector(".info .temp").innerHTML = Math.round(data.main.temp) + " &#8451;";
        document.querySelector(".info .condition").innerHTML = data.weather[0].description;
    
    
        if (data.weather[0].main == "Clear") {
            document.querySelector(".info img").src = `./images/clear.png`
        }
        else if (data.weather[0].main == `Clouds`) {
            document.querySelector(".info .image").src = `./images/clouds.png`
        }
        else if (data.weather[0].main == `Smoke`) {
            document.querySelector(".info .image").src = `./images/smoke.png`
        }
        else if (data.weather[0].main == "Rain") {
            document.querySelector(".info img").src = `./images/rain.png`
        }
        else if (data.weather[0].main == "Thunderstorm") {
            document.querySelector(".info img").src = `./images/thunderstorm.png`
        }
        else if (data.weather[0].main == "Snow") {
            document.querySelector(".info img").src = `./images/snow.png`
        }
        else if (data.weather[0].main == "Drizzle") {
            document.querySelector(".info img").src = `./images/drizzle.png`
        }
        else if (data.weather[0].main == "Mist") {
            document.querySelector(".info img").src = `./images/mist.png`
        } else {
            document.querySelector(".info img").src = `./images/humidity.png`
        }
        console.log(data);
    }

}
button.addEventListener("click", function(){
    informationpanel.style.display = `block`;
     information(cityname.value);
})
