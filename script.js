const container = document.querySelector('.weather');
const inputValue = JSON.parse(localStorage.getItem('inputValue'));
const icon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const city = document.querySelector('.city');
const feelsTemp = document.querySelector('.feels-temp');
const humidity = document.querySelector('.humid-percent');
const feelsIcon = document.querySelector('.feels-icon');

const fetchWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=103faa6bbea590dc1eab8cd4dbc99996&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

const sentenceCase = (str) => {
    const arr = str.split(' ');
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return arr.join(" ");
}

const setIcon = (temp1, temp2) => {
    if(temp1 < temp2) {
        feelsIcon.src = "./images/temperature-max.svg";
        feelsIcon.alt = "temperature max icon"
    }
    else {
        feelsIcon.src = "./images/temperature-frigid.svg";
        feelsIcon.alt = "temperature min icon"
    }
}

fetchWeather().then((data) => {
    container.style.display = 'block';
    const iconId = data.weather[0].icon;
    const temp = data.main.temp;
    const feels = data.main.feels_like;
    icon.src = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
    temperature.textContent = temp + "\u2103";
    description.textContent = sentenceCase(data.weather[0].description.toUpperCase());
    city.textContent = sentenceCase(inputValue);
    setIcon(temp, feels);
    feelsTemp.textContent = feels + "\u2103";
    humidity.textContent = data.main.humidity + "%";
})

