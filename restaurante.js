var mesa1,mesa2,mesa3,mesa4,mesa5,mesa6;
resservado = [];
noreservado =[mesa1,mesa2,mesa3,mesa4,mesa5,mesa6];
v = true;
while(v == true){
    var s = prompt ("Que mesa deseas reservar de la 1 a 6 o presiona (c) para cancelar una reservacion");
    switch(s){
        case "1":
            for(var x = 0;x < noreservado.length; x++){
                if(mesa1 == noreservado[x]){
                    alert ("Mesa disponible");
                    var nombre1 = prompt ("Ingrese su nombre");
                    nombre1.toLowerCase;
                    var personas1 = prompt ("Ingresa la cantidad de prsonas que asistiran");
                    var horario1 = prompt ("Ingresa el horario");
                    alert ("La mesa ha sido reservadda");
                    resservado.push(mesa1);
                    v = true;
                    break;
                }else{
                    alert ("Mesa reservada");
                    break;
                }
            }
        case "2":
            for(var x = 0;x < noreservado.length; x++){
                if(mesa2 == noreservado[x]){
                    alert ("Mesa disponible");
                    var nombre2 = prompt ("Ingrese su nombre");
                    nombre2.toLowerCase;
                    var personas2 = prompt ("Ingresa la cantidad de prsonas que asistiran");
                    var horario2 = prompt ("Ingresa el horario");
                    alert ("La mesa ha sido reservadda");
                    resservado.push(mesa2);
                    break;
                }else{
                    alert ("Mesa reservada");
                    break;
                }
            }
        case "3":
            for(var x = 0;x < noreservado.length; x++){
                if(mesa3 == noreservado[x]){
                    alert ("Mesa disponible");
                    var nombre3 = prompt ("Ingrese su nombre");
                    nombre3.toLowerCase;
                    var personas3 = prompt ("Ingresa la cantidad de prsonas que asistiran");
                    var horario3 = prompt ("Ingresa el horario");
                    alert ("La mesa ha sido reservadda");
                    resservado.push(mesa3);
                    break;
                }else{
                    alert ("Mesa reservada");
                    break;
                }
            }
        case "4":
            for(var x = 0;x < noreservado.length; x++){
                if(mesa4 == noreservado[x]){
                    alert ("Mesa disponible");
                    var nombre4 = prompt ("Ingrese su nombre");
                    nombre4.toLowerCase;
                    var personas4 = prompt ("Ingresa la cantidad de prsonas que asistiran");
                    var horario4 = prompt ("Ingresa el horario");
                    alert ("La mesa ha sido reservadda");
                    resservado.push(mesa4);
                    break;
                }else{
                    alert ("Mesa reservada");
                    break;
                }
            }
        case "5":
            for(var x = 0;x < noreservado.length; x++){
                if(mesa5 == noreservado[x]){
                    alert ("Mesa disponible");
                    var nombre5 = prompt ("Ingrese su nombre");
                    nombre5.toLowerCase;
                    var personas5 = prompt ("Ingresa la cantidad de prsonas que asistiran");
                    var horario5 = prompt ("Ingresa el horario");
                    alert ("La mesa ha sido reservadda");
                    resservado.push(mesa5);
                    break;
                }else{
                    alert ("Mesa reservada");
                    break;
                }
            }
        case "6":
            for(var x = 0;x < noreservado.length; x++){
                if(mesa6 == noreservado[x]){
                    alert ("Mesa disponible");
                    var nombre6 = prompt ("Ingrese su nombre");
                    nombre6.toLowerCase;
                    var personas6 = prompt ("Ingresa la cantidad de prsonas que asistiran");
                    var horario6 = prompt ("Ingresa el horario");
                    alert ("La mesa ha sido reservadda");
                    resservado.push(mesa6);
                    break;
                }else{
                    alert ("Mesa reservada");
                    break;
                }
            }
        case "C","c":
            var s2 = prompt("De que mesa deseas cancelar la reservacion?");
            switch (s2){
                case "1":
                    var cancelacion = prompt("Cual era el nombre al que esta reservado la mesa?");
                    cancelacion.toLowerCase;
                    if (cancelacion == nombre1){
                    noreservado.push(mesa1);
                    alert("La reservacion ha sido cancelada");
                    }if (cancelacion =! nombre1){
                        alert ("NO COINCIDE CON LA RESERVACION");
                        s = "c";
                    }
                    break;
                case "2":
                    s = "2"
                    break;
                case "3":
                    s = "3"
                    break;
                case "4":
                    s = "4"
                    break;
                case "5":
                    s = "5"
                    break;
                case "6":
                    s = "6"
                    break;
                default:
                    alert("Solo se acepta un numero de 1 a 6 respectivamente a la mesa");
                    break;
            }
    }
}
console.log(resservado);
console.log(noreservado);

