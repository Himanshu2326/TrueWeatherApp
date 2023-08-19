

// Weather API Area:-

let cityName = document.getElementById('cityName');
let city_name = document.getElementById('city_name')
let submitBtn = document.getElementById('submitBtn');
let temp = document.getElementById('temp');
let data_hide = document.querySelector('.middle_layer')
let temp_status = document.getElementById('temp_status');
// let InputArea = document.querySelector('.InputArea');

const getWeatherInfo = async (event) => {
    event.preventDefault();

    let cityVal = cityName.value;
    if (cityVal == "") {
        city_name.innerText = 'Please Enter City Name';
        data_hide.classList.add('data_hide')
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=73c604d1c335623b5f574390a02b4485`
            let response = await fetch(url);
            let data = await response.json();
            let arrData = [data];

            city_name.innerHTML = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerHTML = arrData[0].main.temp;

            //? Weather Icon 
            let Weather = arrData[0].weather[0].main;

            if (Weather == "Clouds") {
                temp_status.innerHTML = `<i class="fa-solid fa-cloud"></i> `
            }
            else if (Weather == "Clear") {
                temp_status.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`
            }
            else if (Weather == "Rain") {
                temp_status.innerHTML = ` <i class="fa-solid fa-cloud-rain"></i>`
            }
            else if (Weather == "Thunderstrom") {
                temp_status.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`
            }
            else if (Weather == "Smoke" || Weather == "Mist") {
                temp_status.innerHTML = `<i class="fa-solid fa-smog"></i>`
            }
            else if (Weather == "Drizzle") {
                temp_status.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`
            }
            else {
                temp_status.innerHTML = Weather;
            }

            data_hide.classList.remove('data_hide');
            cityName.value = "";


        }
        catch {
            city_name.innerText = 'Please Enter A Valid City Name';
            data_hide.classList.add('data_hide')
        }

    }
}


submitBtn.addEventListener('click', getWeatherInfo);

// Day And Day Area:-

let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];


let mon = document.querySelector('#mon')
let date = document.querySelector('#date')

/*Sample Code*/
let d = new Date();
day.innerHTML = dayNames[d.getDay()];
date.innerHTML = d.getDate();
mon.innerHTML = month[d.getMonth()];
