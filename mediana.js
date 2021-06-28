function mediana(lista1){
    //ordenar arreglo obtenido
    let lista=lista1.sort(function(a, b){return a - b});
    //obtener mitad del arreglo
    const mitad = parseInt(lista.length /2);
    let mediana;
    //verifico si es par o impar
    if((lista.length%2)===0){ 
        const valor1=lista[mitad];
        const valor2=lista[mitad-1]; 
        valormediana=(valor1+valor2)/2;
    }
    else{ 
        valormediana= lista[mitad];
    }
}