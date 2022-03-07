// ЭЛЕМЕНТЫ DOM:
// Блок search
const searchInput = document.getElementById('searchInput');
const iconSearch = document.getElementById('imgSearch');
// Блок tabs__body tab_01
const tabOneTitleTemperature = document.getElementById('scoreboardTitleNumber')
const tabOneMainIcon = document.getElementById('mainIcon');
const tabOneTitleCity = document.getElementById('titleCity');
const tabOneAddCity = document.getElementById('addCity');
// Блок ...

// Блок block__cities
const blockCitiesListCity = document.getElementById('listCity');

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
// Блок tabs__body tab_01
searchInput.addEventListener('keyup', function (event) {
    if (event.keyCode == 13) {
        tabOneTitleCity.textContent = `${searchInput.value}`;
    };
});
iconSearch.addEventListener('click', function () {
    tabOneTitleCity.textContent = `${searchInput.value}`;
});
tabOneAddCity.addEventListener('click', function () {
    blockCitiesListCity.insertAdjacentHTML('beforeend', `<li><a href="#">${searchInput.value}</a></li>`);
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
            // let resultJson = JSON.parse(json);
            // console.log(resultJson);
            // json.main.temp
            console.log(json.main.temp);
        }
    };
});

// function view() {
//     let cityName = searchInput.value;
//     const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
//     const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
//     const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
//     console.log(url);
// }



// Пока хз что это вообще
// const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
// const cityName = 'boston';
// const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
// const url = ${serverUrl}?q=${cityName}&appid=${apiKey};

// const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
// const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

// Блок block__cities