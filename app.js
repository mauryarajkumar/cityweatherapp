
        const apiKey = "6137d5abf724508c5e264b37cb880c4f";
        const apiURL= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
           const searchBox= document.querySelector(".search input");
           const searchBtn= document.querySelector(".search button");
           const weathericon= document.querySelector(".weather-icon");

        async function checkweather(city) {
            const response= await fetch(apiURL + city + `&appid=${apiKey}`);
            var data = await response.json();

            // displayong data in console
            console.log(data);
// data form console fetch from api
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = data.main.temp + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";      
            document.querySelector(".Wind-speed").innerHTML = data.wind.speed + " KM/Hrs";

// for image change able according to weather climate conditions

            if(data.weather[0].main=="Clouds"){
                weathericon.src = "img/clouds.png";
            }
            else if(data.weather[0].main=="Clear"){
                weathericon.src ="img/clear.png";
            }
            else if(data.weather[0].main=="Rain"){
                weathericon.src = "img/rain.png";
            }
            else if(data.weather[0].main=="Drizzle"){
                weathericon.src = "img/drizzle.png";
            }
            else if(data.weather[0].main=="Mist"){
                weathericon.src = "/img/mist.png";
            }
            else if(data.weather[0].main=="Snow"){
                weathericon.src = "img/snow.png";
            }


        }

        searchBtn.addEventListener("click", () => {
            checkweather(searchBox.value);  
        } )
