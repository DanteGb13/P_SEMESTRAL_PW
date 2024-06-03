 const container = document.querySelector('.container');
 const search = document.querySelector('.search-box button');
 const weatherBox = document.querySelector('.weather-box');
 const weatherDetails = document.querySelector('.weather-details');
 const error404 = document.querySelector('.not-found');
 const cityHide = document.querySelector('.city-hide');

search.addEventListener('click' , () => {
    
    const APIkey = '6c31b21445bedc448d7b094295901e99';
    const city =document.querySelector('.search-box input').value;

    if(city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
    ).then(response => response.json()).then (json=>{

        if (json.cod == '404'){
            cityHide.textContent=city;
            container.style.height ='400px'
            weatherBox.classList.remove('activate');
            weatherDetails.classList.remove('activate');
            error404.classList.add('activate');
            return;
        }


        const image = document.querySelector('.weather-box img');
        const temperatura = document.querySelector('.weather-box .temperatura');
        const descripcion = document.querySelector('.weather-box .descripcion');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        if(cityHide.textContent == city){
            return;
        }
        else{
            cityHide.textContent = city;
                
            container.style.height ='555px'
            container.classList.add('activate');
            weatherBox.classList.add('activate');
            weatherDetails.classList.add('activate');
            error404.classList.remove('activate');

            setTimeout(()=>{
                container.classList.remove('activate');

            })


            switch(json.weather[0].main){
                case 'Clear':
                    image.src='/assets/img/clear.png'
                break;
                case 'Rain':
                    image.src='/assets/img/rain.png'
                break;
                case 'Snow':
                    image.src='/assets/img/snow.png'
                break;
                case 'Clouds':
                    image.src='/assets/img/cloud.png'
                break;
                case 'Mist':
                    image.src='/assets/img/mist.png'
                break;
                case 'Haze':
                    image.src='/assets/img/mist.png'
                break;

                default:
                    image.src = '/assets/img/cloud.png';

            }

            temperatura.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
            descripcion.innerHTML=`${json.weather[0].description}`;
            humidity.innerHTML=`${json.main.humidity}%`;
            wind.innerHTML=`${parseInt(json.wind.speed)}km/h`;



        }


    });

   
});

 