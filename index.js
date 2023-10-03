const input = document.querySelector('#city');
const getDataBtn = document.querySelector('.get-data');
const error = document.querySelector('.error');
const handleInput = (e) => {
    const inputValue = e.target.value
    localStorage.setItem('inputValue', JSON.stringify(inputValue));
};

input.addEventListener('input', (e) => {
    error.textContent = "";
    handleInput(e);
});

getDataBtn.addEventListener('click', (e) => {
    if(!input.value) {
        e.preventDefault();
        error.textContent = "Please enter a city name";
    }
})

