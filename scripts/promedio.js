function promedio(lista){ 
    const sumaLista = lista.reduce(
        function(valorAcum=0, nuevoelemento){
            return valorAcum + nuevoelemento;
        }
    );
    return sumaLista / lista.length;
}

