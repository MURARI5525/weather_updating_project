const apiKey="3064d2993e66bb8972fef7de621e9058";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox=document.querySelector(".search input");
        const searchBtn=document.querySelector(".search button ");
        const weatherIcon=document.querySelector(".weather-icon");
        


        async function checkweather(city)
        {
            const response=await fetch(apiUrl + city+ `&appid=${apiKey}`);
            var data=await response.json();
            console.log(data);
            
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src="images/clouds.jpg";
            }else if(data.weather[0].main == "Clear"){
                weatherIcon.src="images/clear.jpg";
            }else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src="images/drizzle.jpg";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src="images/rain.jpg";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src="images/mist.jpg";
            }else if(data.weather[0].main == "Snow"){
                weatherIcon.src="images/snow.jpg";
            }
           
        }
        searchBtn.addEventListener("click",()=>{
            checkweather(searchBox.value);
        })
        checkweather();