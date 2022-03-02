const API_KEY = 'cb05deb1b6f3eddaaf151e73e8f9a066';

async function displayResults(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    if (data.cod === '404') {
        return;
    }
    const tempUi = document.getElementById('temp-ui');
    tempUi.innerHTML = data.main.temp;
    const cityUi = document.querySelector('#cityUi');
    cityUi.innerHTML = data.name;
    const cloud = document.querySelector('.lead');
    cloud.innerHTML = data.weather[0].main;
    const img = document.querySelector('img');
    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

function main() {
    const searchInput = document.querySelector('#search-input');
    const searchCity = searchInput.value.toLowerCase();
    displayResults(searchCity);
    searchInput.value = '';
}

const weatherSearchButton = document.querySelector('#weather-search-btn');

weatherSearchButton.addEventListener('click', () => {
    const searchInput = document.querySelector('#search-input');
    const searchCity = searchInput.value.toLowerCase();
    if (searchCity) {
        main();
    }
});
