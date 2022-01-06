//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado (lado) {
    return lado * 4;
};

function areaCuadrado (lado) {
    return lado * lado;
};

console.groupEnd();


//Código del triángulo
console.group("Triángulos");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
};

function areaTriangulo (base ,altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Código del círculo
console.group("Círculos")
const PI = Math.PI;


function diametroCirculo (radio) {
    return radio * 2;
};

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

function areaCirculo(radio) {
    return (radio * radio) * PI;
};


console.groupEnd();


//Aquí interactuamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro + "cm");
};


function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area + "cm");
};

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("inputTriangulo1");
    const lado2 = document.getElementById("inputTriangulo2");
    const base = document.getElementById("inputBaseTriangulo");
    const value1 = Number(lado1.value);
    const value2 = Number(lado2.value);
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro + "cm");
};

function calcularAreaTriangulo() {
    const base = document.getElementById("inputBaseTriangulo");
    const altura = document.getElementById("inputAlturaTriangulo");
    const value1 = Number(base.value);
    const value2 = Number(altura.value);


    const area = areaTriangulo(value1, value2);
    alert(area + "cm");
};

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro + "cm");
};


function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area + "cm");
};