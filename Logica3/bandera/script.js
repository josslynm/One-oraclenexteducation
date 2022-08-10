let pantalla = document.querySelector("canvas"); //* ("Selector")
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "lightgrey"; //* Propiedad
pincel.fillRect(0,0,600,400); //* funcion

pincel.fillStyle = "green"; //* Propiedad
pincel.fillRect(0,0,200,400); //* funcion

pincel.fillStyle = "red"; //* Propiedad
pincel.fillRect(400,0,200,400); //* funcion

pincel.fillStyle = "yellow"; //* Propiedad
pincel.beginPath(); //* Iniciar una dirección
pincel.moveTo(300,200); // al centro x:300 y:200
pincel.lineTo(200,400); //del centro a -> x:200 y:400
pincel.lineTo(400,400);//x:400 y:400
pincel.fill(); //rellena el grafico con el color definido amarillo

pincel.fillStyle = "blue"; //* Propiedad
pincel.beginPath(); //* Iniciar una dirección
pincel.arc(300,200,50,0,2*3.14)
pincel.fill(); //rellena el grafico con el color definido amarillo

