

export const enviarDatos = (marca , modelo , imagen) => {

    const rutaArchivoHtml = '../zapatilla.html';

    fetch(rutaArchivoHtml)
        .then( response => response.text() )
        .then( (html) => {

            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const imagePage = doc.getElementById('imagePage');
            imagePage.src = imagen

            const titlePage = doc.getElementById('titlePage');
            titlePage.textContent = marca;

            const modeloPage = doc.getElementById('modeloPage');
            modeloPage.textContent =  modelo;

            const nuevoHTML = new XMLSerializer().serializeToString(doc);

            document.body.innerHTML = nuevoHTML;

        })
        .catch((error) => {
            console.error(`Error al cargar los datos : ${error}`);
        })


}