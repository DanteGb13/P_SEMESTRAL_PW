document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactoForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 


        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        const mensajeData = {
            nombre: name,
            correo: email,
            mensaje: mensaje
        };


        let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];


        mensajes.push(mensajeData);


        localStorage.setItem("mensajes", JSON.stringify(mensajes));

    
        form.reset();

  
        alert("Mensaje enviado con éxito!");
    });
});

