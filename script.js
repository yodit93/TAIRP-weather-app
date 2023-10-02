const city = JSON.parse(localStorage.getItem('inputValue'));
const temperature = document.querySelector('.temperature');

const fetchWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=103faa6bbea590dc1eab8cd4dbc99996&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

fetchWeather().then((data) => {
    temperature.textContent = data.main.temp;
})

