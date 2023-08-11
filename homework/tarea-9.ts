export function heroesThatStartsWith(heroes:string[], lettre: string  = 'a'): string[] {
    let newHereoes: string[] = [];
    
    heroes.map((hero) => {
        if (hero.startsWith(lettre)) {
            newHereoes.push(hero);
        }
    });

    
    return newHereoes;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']; 
let herosWithLetterS = heroesThatStartsWith( heroes, 'C' );
console.log( herosWithLetterS ); // She Hulk, Spiderman
