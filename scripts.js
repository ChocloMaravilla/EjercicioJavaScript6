
// Primera parte del ejercicio 6 de JavaScript

function numeros1(b,a,c){
    b = 1; a = 2; c = 3;  
    var resultado = b + a + c;
    return resultado;
}

console.log(numeros1());
// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// Segunda parte del ejercicio 6 de JavaScript

function nombre(nombre,apellido1,apellido2){
    nombre="Ruben";apellido1="Medina";apellido2="Martinez";
    var concatenacion = nombre+" "+apellido1+" "+apellido2;
    console.log(concatenacion);
}
nombre();
// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// Tercera parte del ejercicio 6 de JavaScript


function numeros(a,b){
var numero = a; var numero2 = b;
if(numero > numero2){
    return numero;
}
else{
    return numero2;
}
}
console.log(numeros(4,10));
