function moda(lista) {
    const listaObj = {};
    lista.map(
        function(e) {
            if(listaObj[e]) {
                listaObj[e] += 1;
            } else {
                listaObj[e] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaObj).sort(
        function (a, b) {
            return a[1] - b[1];
        }
    );
    const moda = listaArray[listaArray.length - 1];
    return moda;
};

function CalcularModa(){
    const valor= document.getElementById("inputlista").value;
    const arr = valor.split(','); 
    for(let i=0; i<arr.length;i++){
        arr[i]=parseInt(arr[i]);
    } 
    document.getElementById("moda").innerText= "La moda de tu lista de numeros es: "+moda(arr);
}