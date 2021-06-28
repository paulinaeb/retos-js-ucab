function mediana(lista1){
    //ordenar arreglo obtenido
    let lista=lista1.sort(function(a, b){return a - b});
    //obtener mitad del arreglo
    const mitad = parseInt(lista.length /2);
    let valormediana;
    //verifico si es par o impar
    if((lista.length%2)===0){ 
        const valor1=lista[mitad];
        const valor2=lista[mitad-1]; 
        valormediana=(valor1+valor2)/2;
    }
    else{ 
        valormediana= lista[mitad];
    }
    return valormediana;
}
 
function CalcularMediana(){
    const valor= document.getElementById("inputlista").value;
    const arr = valor.split(','); 
    for(let i=0; i<arr.length;i++){
        arr[i]=parseInt(arr[i]);
    } 
    document.getElementById("mediana").innerText= "La mediana de tu lista de numeros es: "+mediana(arr);
}