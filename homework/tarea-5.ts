export let numbers: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

const base: number = 2;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    let result = element % base;

    let strPar = result == 0 ? 'par' : 'impar'

    console.log(`El número ${element} es ${strPar}`)
}
