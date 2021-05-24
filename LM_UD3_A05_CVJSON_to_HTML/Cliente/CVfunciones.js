//CONTINENTE

function cargaAJAX() {
    console.log("En la función cargaAjax");
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            console.log("RESPUESTA RECIBIDA");
            //console.log(xhttp.responseText);
            var obj = JSON.parse(xhttp.responseText);

            selectorContinente(obj);

        } else if (this.readyState == 4 && this.status == 404) {
            alert("la ruta ${ruta} es erronea, compruébala");
        }
    };
    var ruta = "http://localhost/Xavi/servidor/world.php";
    xhttp.open("GET", ruta, true);
    xhttp.send();
}



function selectorContinente(conti) {
    let selectorC = document.getElementById("selectorC");
    console.log(selectorC.value);

    for (let i = 0; i < conti.length; i++) {

        let nombreC = conti[i].nombre;
        let optionC = document.createElement("option");
        let textC = document.createTextNode(nombreC);
        optionC.appendChild(textC);
        selectorC.appendChild(optionC);
    }
}
///PAIS

function cargarAjax2() {
    console.log("En la función cargaAjax 2");
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            console.log("RESPUESTA RECIBIDA");
            //console.log(xhttp.responseText);
            var obj = JSON.parse(xhttp.responseText);
            selectorPais(obj);

        } else if (this.readyState == 4 && this.status == 404) {
            alert("la ruta ${ruta} es erronea, compruébala");
        }
    };
    let pais1 = document.getElementById("selectorC").value;
    var ruta2 = "http://localhost/Xavi/servidor/world.php?continente=" + pais1;
    xhttp.open("GET", ruta2, true);
    xhttp.send();
}
function selectorPais(pais) {
    let eleccionPais = document.getElementById("selectorC").value;
    let selectorP = document.getElementById("selectorP");
    console.log(selectorP);
    console.log(eleccionPais + " desde selectorPais");

    for (let x = 0; x < pais.length; x++) {

        let generalP = pais[x];
        let nombreP = generalP.nombre;
        let codigoP = generalP.codigo;
        let optionP = document.createElement("option");
        optionP.setAttribute("value", generalP.codigo)
        let textoP = document.createTextNode(nombreP);

        selectorP.appendChild(optionP);
        optionP.appendChild(textoP);
    }
}
///CIUDAD

function cargarAjax3() {
    console.log("En la función cargaAjax 3");
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            console.log("RESPUESTA RECIBIDA");
            //console.log(xhttp.responseText);
            var obj = JSON.parse(xhttp.responseText);

            selectorCiudad(obj);

        } else if (this.readyState == 4 && this.status == 404) {
            alert("la ruta ${ruta} es erronea, compruébala");
        }
    };
    let y = document.getElementById("selectorP").value;
    console.log(y);

    var ruta3 = "http://localhost/Xavi/servidor/world.php?pais=" + y;
    xhttp.open("GET", ruta3, true);
    xhttp.send();
}

function selectorCiudad(ciudad) {
    let selectorP = document.getElementById("selectorP").value;
    let selectorCi = document.getElementById("selectCi");
    console.log(ciudad);
    let count = 1;
    for (let z = 0; z < ciudad.length; z++) {
        let nombreCi = ciudad[z].nombre;
        console.log("dentro del bucle ciudad");

        let optionCi = document.createElement("option");
        optionCi.setAttribute("id", count);
        let textoCi = document.createTextNode(nombreCi);

        selectorCi.appendChild(optionCi);
        optionCi.appendChild(textoCi);
        count++;
    }
    let emptyOption = document.createElement("option");
    let textoCi2 = document.createTextNode("");
    selectorCi.appendChild(emptyOption);
    emptyOption.appendChild(textoCi2);
}

function cargarAjax4() {
    console.log("En la función cargaAjax 3");
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            console.log("RESPUESTA RECIBIDA");
            //console.log(xhttp.responseText);
            var obj = JSON.parse(xhttp.responseText);

            imprimirCiudad(obj);

        } else if (this.readyState == 4 && this.status == 404) {
            alert("la ruta ${ruta} es erronea, compruébala");
        }
    };
    let y = document.getElementById("selectCi").value;
    console.log(y);

    var ruta4 = "http://localhost/Xavi/servidor/world.php?pais=" + y;
    console.log(ruta4);
    xhttp.open("GET", ruta4, true);
    xhttp.send();
}
function imprimirCiudad(ciudad) {
    let aux = document.getElementById("result");
    let aux2 = document.getElementById("selectCi").value;
    console.log(aux2);
    let text4 = document.createTextNode(aux2);
    aux.appendChild(text4);
}
