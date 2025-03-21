
function verificar() {
    let elementoRespueta = document.getElementById("decision");

    let elementoEdad = document.getElementById("textoEdad");
    let edad = parseInt(elementoEdad.value);

    if (edad < 18){
        elementoRespueta.textContent = "Tienes " + edad
        + "años, te falta  " + (18 - parseInt(edad)).toString() +
        " años para ser mayor de edad";
    } else {
        elementoRespueta.textContent = "ya puedes comprar licor";
    }
}