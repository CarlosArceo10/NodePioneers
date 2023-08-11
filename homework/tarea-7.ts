
export function max(num1: number, num2: number, num3: number) {
    let numMax = 0;

    if (num1 >= num2) {
        numMax = num1;
    } else {
        numMax = num2;
    }

    if (num3 >= numMax) {
        numMax = num3;
    }

    return numMax;

}

let maxValue = max(10, 18, 18); 
console.log( maxValue ); // 6