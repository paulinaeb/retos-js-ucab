//tu codigo para calcular el descuento va aqui


function CalcularDes(){
    const price= document.getElementById("inputPrice").value;
    const desc= document.getElementById("inputDesc").value;
    // resultado con html
    //aqui debes llamar a tu funcion, asignando su valor a una constante
    
    const result = document.getElementById("newPrice");
    result.innerText= "El precio con descuento es: $"; //aqui concatenas tu resultado
}