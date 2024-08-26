
        const Apikey = "96ea6914020e19bf53fa8355d73f5655";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchButton = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city) {
            try {
                const response = await fetch(apiUrl + city + `&appid=${Apikey}`);
                if (!response.ok) {
                    throw new Error("City not found");
                }
                const data = await response.json();
                console.log(data);

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

                switch (data.weather[0].main) {
                    case "Clouds":
                        weatherIcon.src = "./weather-app-img/images/clouds.png";
                        break;
                    case "Clear":
                        weatherIcon.src = "./weather-app-img/images/clear.png";
                        break;
                    case "Drizzle":
                        weatherIcon.src = "./weather-app-img/images/drizzle.png";
                        break;
                    case "Mist":
                        weatherIcon.src = "./weather-app-img/images/mist.png";
                        break;
                    case "Rain":
                        weatherIcon.src = "./weather-app-img/images/rain.png";
                        break;
                    case "Snow":
                        weatherIcon.src = "./weather-app-img/images/snow.png";
                        break;
                    default:
                        weatherIcon.src = "./weather-app-img/images/wind.png";
                        break;
                }

                document.querySelector(".weather").style.display = "block";

            } catch (error) {
                alert(error.message);
            }
        }

        searchButton.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });

