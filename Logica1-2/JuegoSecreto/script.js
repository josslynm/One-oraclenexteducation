let secreto = Math.round(Math.random*10);
let input = document.querySelector("input");
input.focus();

function verifica(){

    
        if(input.value == secreto ){
            alert("Usted acertó");
        }else{
            alert("Usted erró");
        }
    

    input.value="";
    input.focus();
}

