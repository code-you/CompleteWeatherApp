const day = document.getElementById('day');
const today_date = document.getElementById('today_date');
const city_name = document.getElementById('city_name');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const submitBtn = document.getElementById('submitBtn');

const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
    event.preventDefault();
    
     let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText=`Please Enter city Name`;
        datahide.classList.add('data_hide');
    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=dacfb9eaa5fc10a9f23814743e22d29e`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const arr = [data];

        city_name.innerText = `${arr[0].name} , ${arr[0].sys.country}`;
        temp.innerText = `${arr[0].main.temp}°C`;

        let temp_stat = arr[0].weather[0].main;
        if(temp_stat == "Clear"){
            temp_status.innerHTML = "<i class = 'fas fa-sun' style='color:#e0bb3c;'></i>"
        }
        else if(temp_stat == "Clouds"){
            temp_status.innerHTML = "<i class = 'fas fa-cloud' style='color:#c9bfc6;'></i>"
        }
        else if(temp_stat == "Rain"){
            temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style='color:#4078b9;'></i>"
        }
        else{
            temp_status.innerHTML = "<i class = 'fas fa-sun' style='color:#e0bb3c;'></i>"
        }
        datahide.classList.remove('data_hide');
    }
    catch{
        city_name.innerText=`Please Enter Valid city Name`;
        datahide.classList.add('data_hide');
    }
 }
}

submitBtn.addEventListener('click', getInfo)