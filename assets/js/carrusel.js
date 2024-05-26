document.addEventListener('DOMContentLoaded', (event) => {
    const carouselElement = document.querySelector('#carouselExampleCaptions');
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 3000, 
      ride: 'carousel'
    });
  });
  