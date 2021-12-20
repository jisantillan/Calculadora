
   
        var uno = document.getElementById('uno');
        var dos = document.getElementById('dos');
        var tres = document.getElementById('tres');
        var cuatro = document.getElementById('cuatro');
        var cinco = document.getElementById('cinco');
        var seis = document.getElementById('seis');
        var siete = document.getElementById('siete');
        var ocho = document.getElementById('ocho');
        var nueve = document.getElementById('nueve');
        var cero = document.getElementById('cero');

        var mas = document.getElementById('mas');
        var menos = document.getElementById('menos');
        var por = document.getElementById('por');
        var dividido = document.getElementById('dividido');
        var igual = document.getElementById('igual');
        var pi = document.getElementById('pi');
        var pd = document.getElementById('pd');
        var coma = document.getElementById('coma');
        var borrar = document.getElementById('borrar');

        var ac = document.getElementById('ac');
        var resultado = document.getElementById('res');

        // numeros
        uno.onclick = function (e) {

                resultado.innerHTML = resultado.textContent + uno.value;
        }
        dos.onclick = function (e) {
                resultado.innerHTML = resultado.textContent + dos.value;
        }
        tres.onclick = function (e) {
                resultado.innerHTML = resultado.textContent + tres.value;
        }
        cuatro.onclick = function (e) {
                resultado.innerHTML =  resultado.textContent + cuatro.value;
        }
        cinco.onclick = function (e) {
                resultado.innerHTML =  resultado.textContent + cinco.value;
        }
        seis.onclick = function (e) {
                resultado.innerHTML =  resultado.textContent + seis.value;
        }
        siete.onclick = function (e) {
                resultado.innerHTML =  resultado.textContent + siete.value;
        }
        ocho.onclick = function (e) {
                resultado.innerHTML =  resultado.textContent + ocho.value;
        }
        nueve.onclick = function (e) {
                resultado.innerHTML =  resultado.textContent + nueve.value;
        }
        cero.onclick = function (e) {
                resultado.innerHTML =  resultado.textContent + cero.value;
        }

        ac.onclick = function(e){
                resultado.innerHTML = "";
        }

        //operadores
        mas.onclick = function (e) {
                resultado.innerHTML =  resultado.textContent + mas.value;
        }
        menos.onclick = function (e) {
                resultado.innerHTML =  resultado.textContent + menos.value;
        }
        por.onclick = function (e) {
                resultado.innerHTML =  resultado.textContent + por.value;
        }
        dividido.onclick = function (e) {
                resultado.innerHTML =  resultado.textContent + dividido.value;
        }
        pi.onclick= function(e) {
                resultado.innerHTML =  resultado.textContent + pi.value;
        }
        pd.onclick= function(e) {
                resultado.innerHTML =  resultado.textContent + pd.value;
        }
        coma.onclick= function(e) {
                resultado.innerHTML =  resultado.textContent + coma.value;
        }
        borrar.onclick= function(e) {
                resultado.innerHTML = resultado.textContent.slice(0, -1);
        }

        //resultado

        igual.onclick = function(e){
                try{
                resultado.innerHTML = eval(resultado.textContent);}
                catch{
                        resultado.innerHTML = "Revise su operación";
                }
        }


     