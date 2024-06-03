import { enviarDatos } from "./zapatilla.js";

const obtenerZapatillas = async () => {
    try {
        const response = await fetch('https://api-zapatillas-armr.onrender.com/');
        if (!response.ok) {
            throw new Error('Hubo un error en la red');
        }
        const data = await response.json();
        return data.zapatillas;
    } catch (error) {
        console.error('Hubo un problema con el fetch:', error);
    }
};


const crearTarjetas = (zapatillas) => {

    let zapatillaRow = document.getElementById("zapatillaRow");

    zapatillas.map( ( zapatilla )=> {

        const { marca , modelo , imagen , precio } = zapatilla;

        const divRow = document.createElement("div");
        divRow.classList.add("col-xl-3");
        divRow.classList.add("col-lg-3");
        divRow.classList.add("col-md-3");
        divRow.classList.add("col-sm-3");
        divRow.classList.add("col-xs-3");
        divRow.classList.add("mt-2");
        divRow.classList.add("mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = imagen;
        img.classList.add("card-img-top");
        img.addEventListener("click", ()=> {
            enviarDatos(marca,modelo,imagen);
        })

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const titulo = document.createElement("h5");
        titulo.classList.add("card-title");
        titulo.textContent = marca;

        const subTitulo = document.createElement("p");
        subTitulo.classList.add("card-text");
        subTitulo.textContent = modelo;

        const subsubtitulo = document.createElement("h6");
        subsubtitulo.classList.add("card-title");
        subsubtitulo.textContent = precio;

        /*const btnMostrar = document.createElement("button");
        btnMostrar.classList.add("btn");
        btnMostrar.classList.add("btn-danger");
        btnMostrar.textContent = "Comprar";
        btnMostrar.addEventListener("click", ()=> {
            enviarDatos(marca,modelo,imagen);
        })*/

        divRow.appendChild(card);

        card.appendChild(img);
        card.appendChild(divBody);

        divBody.appendChild(titulo);
        divBody.appendChild(subTitulo);
        divBody.appendChild(subsubtitulo);
        /*divBody.appendChild(btnMostrar);*/

        zapatillaRow.appendChild(divRow);


    
    })
}

obtenerZapatillas()
    .then((zapatillas) => {
        crearTarjetas(zapatillas);
    })
    .catch((error)=> {
        console.log(error);
    })