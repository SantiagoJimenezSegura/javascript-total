function sugerir(genero){
    let edad = document.getElementById("edad").value;
    let sugerencia = document.getElementById("sugerencia");
 
    switch(genero) {
        case 'drama':
            if (edad < 13) {
                sugerencia.textContent = "Casablanca";
            } else {
                if (edad < 16) {
                    sugerencia.textContent = "The Shawshank Redemption";
                } else {
                    sugerencia.textContent = "Taxi Driver";
                }
            }
            break;
        case 'comedia':
            if (edad < 13) {
                sugerencia.textContent = "Back to the Future";
            } else {
                if (edad < 16) {
                    sugerencia.textContent = "The Truman Show";
                } else {
                    sugerencia.textContent = "The Wolf of Wall Street";
                }
            }
            break;
        case 'musical':
            if (edad < 13) {
                sugerencia.textContent = "La La Land";
            } else {
                if (edad < 16) {
                    sugerencia.textContent = "Los Miserables";
                } else {
                    sugerencia.textContent = "The Rocky Horror Picture Show";
                }
            }
            break;
        case 'crimen':
            if (edad < 13) {
                sugerencia.textContent = "No hay opciones";
            } else {
                if (edad < 16) {
                    sugerencia.textContent = "El Secreto de tus Ojos";
                } else {
                    sugerencia.textContent = "The Godfather";
                }
            }
            break;
    }
}