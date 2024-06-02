 const container = document.querySelector('.container');
 const search = document.querySelector('.search-box button');
 const weatherBox = document.querySelector('.weather-box');
 const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click' , () => {
    
    const APIkey = '6c31b21445bedc448d7b094295901e99';
    const city =document.querySelector('.search-box input').value;

    if(city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
    ).then(response => response.json()).then (json=>{
        
        const image = document.querySelector('.weather-box img');
        const temperatura = document.querySelector('.weather-box .temperatura');
        const descripcion = document.querySelector('.weather-details .descripcion');
        const humidity = document.querySelector('.weather-box .humidity span');
        const wind = document.querySelector('.weather-box .wind span');

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

    });

   
});

 