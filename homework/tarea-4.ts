export let numbers: number[] = [140, 6, 8, 4, 2, 7, 10, 3, 5, 99];

let maxNumber: number = 0;
for (let index = 0; index < numbers.length; index++) {
    maxNumber = numbers[index] >= maxNumber ? numbers[index] : maxNumber;
}


console.log('El número más grande es: ', maxNumber);