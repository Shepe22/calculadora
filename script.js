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
    if (pantalla == undefined) {

    } else if (/[/*\-+.]{1,}/.test(pantalla)) {
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "/";
        return parrafo.innerHTML = pantalla;
    }
}

function multiplicacion() {
    if (pantalla == undefined) {

    } else if (/[/*\-+.]{1,}/.test(pantalla)) {
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "*";
        return parrafo.innerHTML = pantalla;
    }
}

function resta() {
    if (pantalla == undefined) {

    } else if (/[/*\-+.]{1,}/.test(pantalla)) {
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "-";
        return parrafo.innerHTML = pantalla;
    }
}

function suma() {
    if (pantalla == undefined) {

    } else if (/[/*\-+.]{1,}/.test(pantalla)) {
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += "+";
        return parrafo.innerHTML = pantalla;
    }
}

function punto() {
    if (pantalla == undefined) {

    } else if (/[/*\-+.]{1,}/.test(pantalla)) {
        return parrafo.innerHTML = pantalla;
    } else {
        pantalla += ".";
        return parrafo.innerHTML = pantalla;
    }
}


// <<<<<<<<< OPERACIONES >>>>>>>>>

function resultado() {
    let operacion = [];
    if (pantalla.includes("+")) {
        operacion = pantalla.split("+");
        pantalla = Number(operacion[0]) + Number(operacion[1]);
        return parrafo.innerHTML = pantalla;

    } else if (pantalla.includes("-")) {
        operacion = pantalla.split("-");
        pantalla = Number(operacion[0]) - Number(operacion[1]);
        return parrafo.innerHTML = pantalla;

    } else if (pantalla.includes("*")) {
        operacion = pantalla.split("*");
        pantalla = Number(operacion[0]) * Number(operacion[1]);
        return parrafo.innerHTML = pantalla;
        
    } else if (pantalla.includes("/")) {
        operacion = pantalla.split("/");
        pantalla = Number(operacion[0]) / Number(operacion[1]);
        return parrafo.innerHTML = pantalla;
        
    }


}