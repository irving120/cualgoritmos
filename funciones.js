var x = true;
while (x == true){
    var m = prompt ("Que deseas hacer? \n 1.-Calculadora \n 2.-Nombre de mascota \n 3.-Salir");
    switch(m){
        case "1":
            Calculadora();
            break;
        case "2":
            mascota();
            break;
        case "3":
            x = false;
            break;
        default :
            alert ("Opcion invaida");
            x = true;
            break;
    }
}
//CALCULADORA
function Calculadora(){
    var o = prompt ("Que operacion deseas realizar? \n 1.-Suma \n 2.-Resta \n 3.-Multiplicacion \n 4.-Division \n 5.-Menu principal");
    switch (o){
        case "1":
            Suma();
            break;
        case "2":
            Resta();
            break;
        case "3":
            Multiplicacion();
            break;
        case "4":
            Division();
            break;
        case "5":
            x = true;
            break;
        default :
            alert ("Opcion invalida");
            Calculadora();
            break;
    }
}
//SUMA
function Suma (n1,n2,r){
    var n1 = prompt ("Ingresa el primer numero");
    var n2 = prompt ("Ingresa el segundo numero");
    var r = parseInt(n1) + parseInt(n2);
    alert ("El resultado es:" + " " + r);
    var y = prompt ("Deseas realizar otra suma? \n 1.-Si \n 2.-No");
    if (y == "1"){
        Suma();
    }else{
        Calculadora();
    }
}
//RESTA
function Resta (n1,n2,r){
    var n1 = prompt ("Ingresa el primer numero");
    var n2 = prompt ("Ingresa el segundo numero");
    var r = parseInt(n1) - parseInt(n2);
    alert ("El resultado es:" + " " + r);
    var y = prompt ("Deseas realizar otra resta? \n 1.-Si \n 2.-No");
    if (y == "1"){
        Resta();
    }else{
        Calculadora();
    }
}
//MULTIPLICACION
function Multiplicacion (n1,n2,r){
    var n1 = prompt ("Ingresa el primer numero");
    var n2 = prompt ("Ingresa el segundo numero");
    var r = parseInt(n1) * parseInt(n2);
    alert ("El resultado es:" + " " + r);
    var y = prompt ("Deseas realizar otra multiplicacion? \n 1.-Si \n 2.-No");
    if (y == "1"){
        Multiplicacion();
    }else{
        Calculadora();
    }
}
//DIVISION
function Division (n1,n2,r){
    var n1 = prompt ("Ingresa el primer numero");
    var n2 = prompt ("Ingresa el segundo numero");
    var r = parseInt(n1) / parseInt(n2);
    alert ("El resultado es:" + " " + r);
    var y = prompt ("Deseas realizar otra division? \n 1.-Si \n 2.-No");
    if (y == "1"){
        Division();
    }else{
        Calculadora();
    }
}
//MASCOTA
function mascota (){
    var p = prompt("Que deseas hacer \n 1.-Asignarle un nombre nuevo \n 2.-Menu principal");
    switch (p){
        case "1":
            confirmacion();
        case "2":
            x = true;
            break;
        default:
            alert ("Opcion invalida");
            mascota();
            break;
    }
}
function confirmacion (){
    var n = prompt ("Que nombre quieres asignarle a tu perro?");
    n.toLocaleLowerCase;
    alert ("El nombre asignado fue:" + " " + n);
    var u = prompt ("Que quieres hacer \n 1.-Asignarle otro nombre \n 2.-Salir");
    if (u == "1"){
        confirmacion();
    }if(u == "2"){
        x = true;  
    }
}