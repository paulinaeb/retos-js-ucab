function promedio(lista){
    // let sumaLista =0;
    // for(let i=0; i<lista.length; i++){
    //     sumaLista=sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function(valorAcum=0, nuevoelemento){
            return valorAcum + nuevoelemento;
        }
    );
    return sumaLista / lista.length;
}

