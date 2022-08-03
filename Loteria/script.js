function saltarLinea() {
        document.write("<br>");    
        document.write("<br>");    
        document.write("<br>");     
}  

function imprimir(frase) {
    document.write(frase);
        saltarLinea();
}

function sortea(n) {
    numeroRandom= Math.round(Math.random()*n);
    return numeroRandom;    
}


var numeroPensado = sortea(15);

test1 = prompt("Adivina el numero: ");

if(numeroPensado == test1){
    imprimir("¡Bien jugado! ¡Adivinaste!")
}
else if(numeroPensado > test1){
    imprimir(`Numero equivocado, tu numero lanzado es menor a ${numeroPensado}`)
}
else if(numeroPensado <test1){
    imprimir(`Tu numero lanzado es mayor a ${numeroPensado}` )
}else{
    imprimir("No ingresaste un número")
}