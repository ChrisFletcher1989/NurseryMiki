window.addEventListener('load', function () {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=35.76&longitude=139.81&hourly=temperature_2m,weathercode&current_weather=true&forecast_days=1')
        .then(response => response.json())
        .then(data => {
            const currentTemperature = data.current_weather.temperature;
            const currentWeatherCode = data.current_weather.weathercode;

                const weatherList = document.getElementById('weatherList');
                const listItem = document.createElement('li');
                listItem.textContent = `足立: ${currentTemperature}°C`;
                weatherList.appendChild(listItem);
                listItem.classList.add('home')
                console.log(currentTemperature)

            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

});
window.addEventListener('load', function () {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m,weathercode&current_weather=true&forecast_days=1')
        .then(response => response.json())
        .then(data => {
            const currentTemperature = data.current_weather.temperature;
            const currentWeatherCode = data.current_weather.weathercode;

                const weatherList = document.getElementById('weatherList');
                const listItem = document.createElement('li');
                listItem.textContent = `ロンドン: ${currentTemperature}°C`;
                weatherList.appendChild(listItem);
                listItem.classList.add('home')
                console.log(currentTemperature)

            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

});


