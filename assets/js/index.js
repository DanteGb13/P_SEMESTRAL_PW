/*para el slider*/
document.addEventListener('DOMContentLoaded', (event) => {
    const carouselElement = document.querySelector('#carouselExampleCaptions');
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 3000, 
      ride: 'carousel'
    });
  });
  //finalizado"esto solo es el auto pase del slider"
  

/*logout */
const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'login.html'
})
/*Fin del logout*/

/*Para el mapa*/
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat: 40.645037, lng: -73.880224},
    });

    var image = 'images/maps-and-flags.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 40.645037, lng: -73.880224},
        map: map,
        icon: image
    });
}
/*api linkeada en el html, debido al metodo de este*/ 