const input = document.querySelector('#city');
const handleInput = (e) => {
    const inputValue = e.target.value
    localStorage.setItem('inputValue', JSON.stringify(inputValue));
}

input.addEventListener('change', (e) => {
    handleInput(e);
})
