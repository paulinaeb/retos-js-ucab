// Helpers - utils
function esPar(num) {
    return (num % 2 === 0);
  }
  
  // Calculadora de mediana
  function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
         return (lista[mitad - 1] +  lista[mitad]) / 2;
    } 
    else {
      return lista[mitad];
    }
  }
  
  // Mediana General
  const salariosCol = colombia.map(
    function (persona) {
      return persona.salary;
    }
  );
  
  const salariosColSorted = salariosCol.sort(
    function (a, b) {
      return a - b;
    }
  );

  const medianaGeneralCol = medianaSalarios(salariosColSorted);
  // Mediana del top 10%
  const spliceStart = (salariosColSorted.length * 90) / 100;
  const spliceCount = salariosColSorted.length - spliceStart;
  
  const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
  );
  
  const medianaTop10Col = medianaSalarios(salariosColTop10);
  
  console.log({
    medianaGeneralCol,
    medianaTop10Col,
  });
