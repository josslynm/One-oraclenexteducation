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


var numeroPensado = sortea(10);

let intentos =3;
let i= 1;

while(i <= intentos){

    test1 = prompt("Adivina el numero: ");

    if(numeroPensado == test1){
        alert(`¡Bien jugado! ¡Adivinaste en el intento ${i}!`)
        break;
    }
    else if(test1 === null){
        alert(`Fin del juego`);
        break;

    }else{
        alert(`Usted erró. Intento no. ${i} de 3`)
    }
        i++;


}
