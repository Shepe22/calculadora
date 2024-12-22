let parrafo = document.getElementById('parrafo');
let pantalla;






// <<<<<<<<< NUMEROS >>>>>>>>>
function uno() {
    if (pantalla == undefined) {
        pantalla = "1";
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "1";
        return parrafo.innerHTML = pantalla;
    }
}

function dos() {
    if (pantalla == undefined) {
        pantalla = "2";
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "2";
        return parrafo.innerHTML = pantalla;
    }
}

function tres() {
    if (pantalla == undefined) {
        pantalla = "3";
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "3";
        return parrafo.innerHTML = pantalla;
    }
}

function cuatro() {
    if (pantalla == undefined) {
        pantalla = "4";
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "4";
        return parrafo.innerHTML = pantalla;
    }
}

function cinco() {
    if (pantalla == undefined) {
        pantalla = "5";
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "5";
        return parrafo.innerHTML = pantalla;
    }
}

function seis() {
    if (pantalla == undefined) {
        pantalla = "6";
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "6";
        return parrafo.innerHTML = pantalla;
    }
}

function siete() {
    if (pantalla == undefined) {
        pantalla = "7";
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "7";
        return parrafo.innerHTML = pantalla;
    }
}

function ocho() {
    if (pantalla == undefined) {
        pantalla = "8";
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "8";
        return parrafo.innerHTML = pantalla;
    }
}

function nueve() {
    if (pantalla == undefined) {
        pantalla = "9";
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "9";
        return parrafo.innerHTML = pantalla;
    }
}

function cero() {
    if (pantalla == undefined) {
        pantalla = "0";
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "0";
        return parrafo.innerHTML = pantalla;
    }
}




// <<<<<<<<< OPERACIONES >>>>>>>>>

function division() {
    let simbolos = pantalla.split("");
    let longitud = simbolos.length;
    if (pantalla == undefined) {

    } else if (simbolos[longitud - 1] == "/") {
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "/";
        return parrafo.innerHTML = pantalla;
    }
}

function multiplicacion() {
    let simbolos = pantalla.split("");
    let longitud = simbolos.length;
    if (pantalla == undefined) {

    } else if (simbolos[longitud - 1] == "*") {
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "*";
        return parrafo.innerHTML = pantalla;
    }
}

function resta() {
    let simbolos = pantalla.split("");
    let longitud = simbolos.length;
    if (pantalla == undefined) {

    } else if (simbolos[longitud - 1] == "-") {
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "-";
        return parrafo.innerHTML = pantalla;
    }
}

function suma() {
    let simbolos = pantalla.split("");
    let longitud = simbolos.length;
    if (pantalla == undefined) {

    } else if (simbolos[longitud - 1] == "+") {
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "+";
        return parrafo.innerHTML = pantalla;
    }
}

function punto() {
    let simbolos = pantalla.split("");
    let longitud = simbolos.length;
    if (pantalla == undefined) {

    } else if (simbolos[longitud - 1] == ".") {
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += ".";
        return parrafo.innerHTML = pantalla;
    }
}


// <<<<<<<<< RESULTADO >>>>>>>>>

function resultadoDivision(arr) {
    let division = arr.split(/(\/)/);
    let posicion = division.indexOf("/");
    if (posicion == - 1) {
        return arr;
    }
    while (posicion !== -1) {

        let num1 = Number(division[posicion - 1]) 
        let num2 = Number(division[posicion + 1]);
        let result = num1 / num2;
        result = result % 1 == 0 ? result : result.toFixed(2)
        division.splice(posicion - 1, 3, result.toString());
        posicion = division.indexOf("/");
        console.log(result);
    }
    return division.join("");
}

function resultadoMultiplicacion(arr) {
    let multiplicacion = arr.split(/(\*)/);
    let posicion = multiplicacion.indexOf("*");
    if (posicion == - 1) {
        return arr;
    }else{

    }
    while (posicion != -1) {

        let result = Number(multiplicacion[posicion - 1]) * Number(multiplicacion[posicion + 1]);
        result = result % 1 == 0 ? result : result.toFixed(2)
        multiplicacion.splice(posicion - 1, 3, result);
        posicion = multiplicacion.indexOf("*");
    }

    return multiplicacion.join("");
}

function resultadoSuma(arr) {
    let suma = arr.split(/(\+)/);
    let posicion = suma.indexOf("+");
    if (posicion == - 1) {
        return arr;
    }
    while (posicion != -1) {

        let num1 = Number(suma[posicion - 1]) 
        let num2 = Number(suma[posicion + 1]);
        let result = num1 / num2;
        result = result % 1 == 0 ? result : result.toFixed(2)
        suma.splice(posicion - 1, 3, result);
        posicion = suma.indexOf("+");
    }

    return suma.join("");
}

function resultadoResta(arr) {
    let resta = arr.split(/(\-)/);
    let posicion = resta.indexOf("-");
    if (posicion == - 1) {
        return arr;
    }
    while (posicion != -1) {

        let result = Number(resta[posicion - 1]) - Number(resta[posicion + 1]);
        result = result % 1 == 0 ? result : result.toFixed(2)
        resta.splice(posicion - 1, 3, result);
        posicion = resta.indexOf("-");
    }

    return resta.join("");
}





function resultado() {

    let result = pantalla;
    result = resultadoDivision(result);
    result = resultadoMultiplicacion(result);
    result = resultadoSuma(result);
    result = resultadoResta(result);
    pantalla = result;
    return parrafo.innerHTML = result;
}