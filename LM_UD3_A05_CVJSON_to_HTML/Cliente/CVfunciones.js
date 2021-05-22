function cargaAJAX() {
    console.log("En la función");
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            console.log("RESPUESTA RECIBIDA");
            console.log(xhttp.responseText);
            var dibujos = JSON.parse(xhttp.responseText);

            pintarDatos(dibujos);

        } else if (this.readyState == 4 && this.status == 404) {
            alert("la ruta ${ruta} es erronea, compruébala");
        }
    };
    var ruta = "http://localhost/Xavi/LM_UD3_A05_CVJSON_to_HTML/Servidor/GironXavier.json";
    xhttp.open("GET", ruta, true);
    xhttp.send();
}

function pintarDatos(data) {


    console.log("Funcion2");
    const educacion = data.educacion_formacion;

   
    let listaEducacion= document.getElementById("educa2");
    let resultEducacion = document.getElementById("educa2");
    let tituloEstudios = document.createElement("h2");
    tituloEstudios.innerHTML = "Estudios";
    listaEducacion.append(tituloEstudios);

    for (let i = 0; i < educacion.length; i++) {
        const educacion = data.educacion_formacion[i];
        console.log(educacion);

        

        let listaEducacion_li = document.createElement("h2");
        listaEducacion_li.innerHTML = educacion.nivel;

        
       
        //ELEMENTO SECTION
        let articleEducacion = document.createElement("h4");
        articleEducacion.setAttribute("class", "capaEducacion");
        articleEducacion.setAttribute("id", educacion.nivel)
        articleEducacion.innerHTML = educacion.centro;

        let aEstudios = document.createElement("h4");
        aEstudios.innerHTML = educacion.duración;
        
        
        listaEducacion.append(listaEducacion_li);
        listaEducacion_li.append(articleEducacion);
        articleEducacion.append(aEstudios);
        resultEducacion.append(articleEducacion);
        articleEducacion.append(aEstudios);

    }


    const idiomas = data.competencias_e_idiomas;

   
    let listaIdiomas= document.getElementById("idiomas");
    let resultIdiomas = document.getElementById("idiomas");


    for (let e = 0; e < idiomas.length; e++) {
        const idiomas = data.competencias_e_idiomas[e];
        console.log(idiomas);

        let tituloIdiomas = document.createElement("h2");
        tituloIdiomas.innerHTML = "IDIOMAS";
        let listaIdiomas_li = document.createElement("h4");
        listaIdiomas_li.innerHTML = idiomas.lengua_materna_1;
        let listaIdiomas_li2 = document.createElement("h4");
        listaIdiomas_li2.innerHTML = idiomas.lengua_materna_2;

        let articleEducacion = document.createElement("h4");
        articleEducacion.setAttribute("class", "capaEducacion");
        articleEducacion.innerHTML = idiomas.otros_idiomas_adquiridos;

        let aIdiomas = document.createElement("h4");
        aIdiomas.innerHTML = idiomas.nivel_en_idiomas_adquiridos;
        
        listaIdiomas.append(tituloIdiomas);
        listaIdiomas.append(listaIdiomas_li);
        listaIdiomas.append(listaIdiomas_li2);
        listaIdiomas_li.append(articleEducacion);
        articleEducacion.append(aIdiomas);
        resultIdiomas.append(articleEducacion);
        articleEducacion.append(aIdiomas);

    }


    const competencias = data.competencias_digitales;

   
    let listaCompetencias= document.getElementById("CDigitales");

    for (let v = 0; v < competencias.length; v++) {
        const competencias = data.competencias_digitales[v];
        console.log(competencias);

        let tituloIdiomas = document.createElement("h2");
        tituloIdiomas.innerHTML = "COMPETENCIAS DIGITALES";
        let listaIdiomas_li = document.createElement("h4");
        listaIdiomas_li.innerHTML = competencias.lenguajes;
        
        listaCompetencias.append(tituloIdiomas);
        listaCompetencias.append(listaIdiomas_li);

    }

    const permisos = data.permiso_conduccion;

   
    let listaPermisos= document.getElementById("permisos");

    for (let d = 0; d < permisos.length; d++) {
        const permisos = data.permiso_conduccion[d];
        console.log(permisos);

        let tituloIdiomas = document.createElement("h2");
        tituloIdiomas.innerHTML = "PERMISOS CIRCULACIÓN";
        let listaIdiomas_li = document.createElement("h4");
        listaIdiomas_li.innerHTML = permisos.licencias;
        
        listaPermisos.append(tituloIdiomas);
        listaPermisos.append(listaIdiomas_li);

    }



    const infoAdicional = data.informacion_adicional;

   
    let listaInfo= document.getElementById("infoAdicional");
    let resultInfo = document.getElementById("infoAdicional");


    for (let p = 0; p < infoAdicional.length; p++) {
        const infoAdicional = data.informacion_adicional[p];
        console.log(infoAdicional);

        let tituloIdiomas = document.createElement("h2");
        tituloIdiomas.innerHTML = "INFO ADICIONAL";
        let listaIdiomas_li = document.createElement("h4");
        listaIdiomas_li.innerHTML = infoAdicional.disponibilidad_trabajo;
        let listaIdiomas_li2 = document.createElement("h4");
        listaIdiomas_li2.innerHTML = infoAdicional.disponibilidad_vehiculo;

        let articleEducacion = document.createElement("h4");
        articleEducacion.setAttribute("class", "capaEducacion");
        articleEducacion.innerHTML = infoAdicional.experiencia_laboral;

        let aIdiomas = document.createElement("h4");
        aIdiomas.innerHTML = infoAdicional.duracion;
        
        listaInfo.append(tituloIdiomas);
        listaInfo.append(listaIdiomas_li);
        listaInfo.append(listaIdiomas_li2);
        listaIdiomas_li.append(articleEducacion);
        articleEducacion.append(aIdiomas);
        resultInfo.append(articleEducacion);
        articleEducacion.append(aIdiomas);

    }
}