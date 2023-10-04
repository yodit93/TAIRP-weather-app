const input = document.querySelector('#city');
const getLocationBtn = document.querySelector('.get-location');
const error = document.querySelector('.error');

localStorage.clear();
input.addEventListener('input', (e) => {
    error.textContent = "";
    localStorage.setItem('city', JSON.stringify(e.target.value));
});

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const value = JSON.parse(localStorage.getItem('city'));
        if (value) {
            window.location.href = 'weather.html';
        } else {
            error.textContent = "Please enter a city name";
        }
    }
});
const fetchCity = async (lat, long) => {
    const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=103faa6bbea590dc1eab8cd4dbc99996`;
    const response = await fetch(url)
    const data = await response.json();
    return data[0].name;
}

getLocationBtn.addEventListener('click', (e) => {
    if(!localStorage.getItem('city')) {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            fetchCity(latitude, longitude)
            .then(data => {
                localStorage.setItem('city', JSON.stringify(data))
                window.location.href = 'weather.html';
            })
            .catch(() => {
                error.textContent = "Error fetching data from API";
            });
        })
    } 
});

