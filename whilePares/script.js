function saltarLinea() {
    document.write("<br>");   
    document.write("<br>");    
        
}  

function imprimir(frase) {
document.write(frase);
    saltarLinea();
}


num =1;

while (num <= 100 ) {
    
    let par = num % 2;
    if (par == 0){
        imprimir(`${num} es par`);
    }

    num++;
}

imprimir("FIN");