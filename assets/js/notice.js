// Clave de API de NewsAPI
const apiKey = '7939d5a61cd74ecd800c0dcdb7728eb7';

// Función para obtener las últimas noticias
async function obtenerNoticias() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const data = await response.json();
        mostrarNoticias(data.articles);
    } catch (error) {
        console.error('Error al obtener las noticias:', error);
    }
}

// Función para mostrar las noticias en la página
function mostrarNoticias(articles) {
    const noticiasList = document.getElementById('noticias-list');
    noticiasList.innerHTML = '';

    articles.forEach(article => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Leer más</a>
        `;
        noticiasList.appendChild(listItem);
    });
}

// Cargar las noticias al cargar la página
window.addEventListener('load', () => {
    obtenerNoticias();
});
