// ЭЛЕМЕНТЫ DOM:
// Блок search
const searchInput = document.getElementById('searchInput');
const iconSearch = document.getElementById('imgSearch');
// Блок tabs__body tab_01
const tabOneTitleTemperature = document.getElementById('scoreboardTitleNumber')
const tabOneMainIcon = document.getElementById('mainIcon');
const tabOneTitleCity = document.getElementById('titleCity');
const tabOneAddCity = document.getElementById('addCity');
// Блок tabs__body tab_02
const tabTwoTitleCity = document.getElementById('tabTwoTitleCity');
const tabTwoTemperature = document.querySelector('.Temperature');
const tabTwoFeelsLike = document.querySelector('.Feels-like');
const tabTwoWeather = document.querySelector('.Weather');
const tabTwoSunrise = document.querySelector('.Sunrise');
const tabTwoSunset = document.querySelector('.Sunset');
// Блок tabs__body tab_03

// Блок cities
const citieslistCity = document.getElementById('listCity');
const citiesAddedList = document.querySelectorAll('.added-cities');

// ИСПОЛНИТЕЛИ:
// Блок search
searchInput.addEventListener('keyup', function (event) {
    if (event.keyCode == 13) {
        searchInput.value;
        console.log(searchInput.value);
    };
});
iconSearch.addEventListener('click', function () {
    searchInput.value;
    console.log(searchInput.value);
});
tabOneAddCity.addEventListener('click', function () {
    citieslistCity.insertAdjacentHTML('beforeend', `<li><a class="added-cities" href="#">${searchInput.value}</a></li>`);
});

searchInput.addEventListener('keyup', function () {
    if (event.keyCode == 13) {
        let cityName = searchInput.value;
        const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
        const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
        const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
        console.log(url);
        if (cityName) {
            let response = fetch(url);
            let json = response.then(result => result.json());
            // Блок tab_1:
            json.then(result => tabOneTitleCity.textContent = result.name);
            json.then(result => tabOneTitleTemperature.textContent = `${(result.main.temp).toFixed(0)}°`);
            // json.then(result => tabOneMainIcon.textContent =
            //     function showNowTabInfo(params) {
            //         const getUrlImg = (img) => `https://openweathermap.org/img/wn/${img}.png`
            //         checkFavoriteCity(params.name);
            //         tabOneMainIcon.src = getUrlImg(params.weather[0].icon);
            //     }
            // );
            // let srcUrl = `http://openweathermap.org/img/w/${json.weather[0].icon}.png`;
            // json.then(result => tabOneMainIcon.innerHTML = 
            //     result.weather[0].icon);
            //Блок tab_2:
            json.then(result => tabTwoTitleCity.textContent = result.name);
            json.then(result => tabTwoTemperature.textContent = `Temperature: ${(result.main.temp).toFixed(0)}°`);
            json.then(result => tabTwoFeelsLike.textContent = `Feels like: ${(result.main.feels_like).toFixed(0)}°`);
            json.then(result => tabTwoWeather.textContent = `Weather: ${result.weather[0].description}`);
            //Нужно еще правильно распаковать Sunrise и Sunset!
            json.then(result => tabTwoSunrise.textContent = `Sunrise: ${result.sys.sunrise}`);
            json.then(result => tabTwoSunset.textContent = `Sunset: ${result.sys.sunset}`);

            console.log(json);
        }
    };
});
iconSearch.addEventListener('click', function () {
    let cityName = searchInput.value;
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    console.log(url);
    if (cityName) {
        let response = fetch(url);
        let json = response.then(result => result.json());
        // Блок tab_1:
        json.then(result => tabOneTitleCity.textContent = result.name);
        json.then(result => tabOneTitleTemperature.textContent = `${(result.main.temp).toFixed(0)}°`);
        // let srcUrl = `http://openweathermap.org/img/w/${json.weather[0].icon}.png`;
        // json.then(result => tabOneMainIcon.innerHTML = 
        //     result.weather[0].icon);
        //Блок tab_2:
        json.then(result => tabTwoTitleCity.textContent = result.name);
        json.then(result => tabTwoTemperature.textContent = `Temperature: ${(result.main.temp).toFixed(0)}°`);
        json.then(result => tabTwoFeelsLike.textContent = `Feels like: ${(result.main.feels_like).toFixed(0)}°`);
        json.then(result => tabTwoWeather.textContent = `Weather: ${result.weather[0].description}`);
        //Нужно еще правильно распаковать Sunrise и Sunset!
        json.then(result => tabTwoSunrise.textContent = `Sunrise: ${result.sys.sunrise}`);
        json.then(result => tabTwoSunset.textContent = `Sunset: ${result.sys.sunset}`);

        console.log(json);

        console.log(json);
    }
});
// Можно доделать ещё опцию моментального вывода информации выбранного из избанного города, а не по ентору и картинке, как сейчас
for (city of citiesAddedList) {
    city.addEventListener('click', function (event) {
        let nameCity = event.target.textContent;
        searchInput.value = nameCity;
        searchInput.click();
    })
}