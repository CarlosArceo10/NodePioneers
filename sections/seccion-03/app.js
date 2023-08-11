// Tarea: 
// Crear un ciclo para multiplicar un número base por el número de límite 

// for
let base = 20;
let limite = 50
if (base <= 0) {
    console.log('La base es un número negativo o cero');
    return false;
}
for (let i = 1; i <= limite; i++ ) {
    console.log(`Ciclo for ${base} x ${i} = ${base * i}`);
}

let contador = 0
while (contador < limite) {
    console.log(`Ciclo while ${base} x ${contador} =  ${base * contador}`);
    contador++;
}

let contadorDo = 0
do  {
    contadorDo++
    console.log(`Ciclo do while ${base} x ${contadorDo} =  ${base * contadorDo}`);

} while (contadorDo < limite)