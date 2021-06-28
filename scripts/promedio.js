function promedio(lista){ 
    const sumaLista = lista.reduce(
        function(valorAcum=0, nuevoelemento){
            return valorAcum + nuevoelemento;
        }
    );
    return sumaLista / lista.length;
}

function CalcularPromedio(){
    const valor= document.getElementById("inputlista").value;
    const arr = valor.split(','); 
    for(let i=0; i<arr.length;i++){
        arr[i]=parseInt(arr[i]);
    }
    document.getElementById("promedio").innerText= "El promedio de tu lista de numeros es: "+promedio(arr);
}
