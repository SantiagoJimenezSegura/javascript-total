function multiplicar(){
    //obtener el numero//
    let elementoTextoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);

    //Vaciar tabla antes de ejecutar//
    elementoTablaMultiplicar.innerText="";

    //producir y mostrar resultados//
    for (let x = 1; x <= 10; x++){
        //Calcular el resultado//
        let numeroResultado = numeroTabla * x;

        //Armar string con el resultado//
        let textoResultado = numeroTabla + " por " + x + " es igual a " + numeroResultado;

        //Crear un elemento de la lista//
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }
}