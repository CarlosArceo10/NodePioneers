export const numbers: number[] = [1, 2, 3, 4, 5];
const multi: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    let result: number[] = [];

    for (let i = 0; i < multi.length; i++) {
        let ele = multi[i];
        let multip = (ele * element);
        result.push(multip);
    }   
    console.log(result);

}