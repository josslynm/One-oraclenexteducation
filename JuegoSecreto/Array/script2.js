function regreso(){
    return Math.round(Math.random()*10);
}

function sortear(num) {
    
    let arreglo=[];
    let i=1;

    while(i<=num){
        
        let valorAl = regreso();
        console.log(valorAl);
        let encontrado = false;

        if(valorAl != 0){

            for (let index = 0; index < arreglo.length; index++) {
                if(valorAl == arreglo[index]){
                    encontrado = true;
                    break;
                }
            }
            
            if(encontrado == false){
                arreglo.push(valorAl);
                i++;
            }
        }
    
    }  

    return arreglo;
}

let secretos= sortear(5);
console.log(secretos);



let input = document.querySelector("input");
input.focus();

function verifica(){

    var encontrado = false;

    for(let i=0; i<secretos.length ; i++){

        if(input.value == secretos[i]){
            // alert("Hallaste el numero");
            // encontrado = true;
            // break;
            encontrado = true;
            return alert("hallaste el numero");
        }

    }

    if(encontrado == false){
        alert("Usted erró")
    }

    

    input.value="";
    input.focus();
}