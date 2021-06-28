//codigo del cuadrado
console.group("Cuadrado");

function perimc(lado) {
    return lado*4;
}

function areac(lado){
    return  lado*lado;
}
console.groupEnd();

//codigo del triangulo
console.group("Triangulo"); 

function perimt(lado1,lado2,base){
    return lado1+lado2+base;
}

function areat(base, alturat){
    return (base*alturat)/2;
}
console.groupEnd();

//codigo circulo
console.group("Circulo");

const PI= Math.PI; 

function diametro(radio){
    return radio*2;
}

function perimcir(radio){
    const diam = diametro(radio);
    return diam*PI; 
}

function areacir(radio){
    return (radio*radio)*PI;
}
console.groupEnd();

//interaccion con html
function CalcularPerimCuadrado(){
    const input= document.getElementById("inputCuadrado");
    const value= input.value;

    const perimetro=perimc(value);
    alert(perimetro);
}

function CalcularAreaCuadrado(){
    const input= document.getElementById("inputCuadrado");
    const value= input.value;

    const area=areac(value);
    alert(area);
}

function CalcularPerimTriangulo(){
    const input1=document.getElementById("inputLado1");
    const valor1=parseInt(input1.value);
    const input2=document.getElementById("inputLado2");
    const valor2=parseInt(input2.value);
    const base=document.getElementById("inputbase");
    const valorbase=parseInt(base.value);

    const perimetrotriangulo = perimt(valor1,valor2,valorbase);
    alert(perimetrotriangulo);
}

function CalcularAreaTriangulo(){
    const altura=document.getElementById("inputaltura");
    const valoraltura=altura.value;
    const base=document.getElementById("inputbase");
    const valorbase=base.value;

    const areatriangulo= areat(valorbase, valoraltura);
    alert(areatriangulo);
}

function CalcularPerimCirculo(){
    const input= document.getElementById("inputradio");
    const value= input.value;

    const perimetro=perimcir(value);
    alert(perimetro);
}

function CalcularAreaCirculo(){
    const input= document.getElementById("inputradio");
    const value= input.value;

    const area=areacir(value);
    alert(area);
}