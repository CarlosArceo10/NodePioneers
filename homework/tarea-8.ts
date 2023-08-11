
export function largestNameOfArray(hereos: string[]) {
    let numCaracteres: number = 0;
    let hero: string = 'Iron Man';

    for (let index = 0; index < hereos.length; index++) {    
        if (hereos[index].length >= numCaracteres) {    
            numCaracteres = hereos[index].length;
            hero = hereos[index];
        }
    }

    return hero;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let hero = largestNameOfArray( heroes );
console.log( hero ); // Profesor Charles Xavier
