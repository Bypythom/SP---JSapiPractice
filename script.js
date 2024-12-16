const apiKey = ''; // Replace 

function search() {
    const city = document.getElementById('cityInput').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())  
        .then(data => {

            const cityName = data.name;  
            const temperature = data.main.temp;  // Temperature in Kelvin
            

            const tempCelsius = (temperature - 273.15).toFixed(2);  
            const tempFahrenheit = ((temperature - 273.15) * 9/5 + 32).toFixed(2); 
            

            document.getElementById('city').innerText = `City: ${cityName}`;
            document.getElementById('temp').innerText = `Temperature: ${tempCelsius}°C (${tempFahrenheit}°F)`;
        })
        .catch(error => console.error('Error:', error));  
}