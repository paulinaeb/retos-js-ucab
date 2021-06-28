function CalcularPrecioConDesc(precio,descuento){
    return (precio * (100-descuento))/100;
}

function CalcularDes(){
    const price= document.getElementById("inputPrice").value;
    const desc= document.getElementById("inputDesc").value;
    // resultado con html
    const precio = CalcularPrecioConDesc(price,desc);
    const result = document.getElementById("newPrice");
    result.innerText= "El precio con descuento es: $"+precio;
}