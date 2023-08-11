import { addTwoNumbers, subTwoNumbers, timeTwoNumbers, divTwoNumbers } from "../helpers/math-helpers";

export function greet(name: string = "Mundo") {
    console.log("hola" , name);
}
//let name = "Carlos";
//greet(name);

let num1 = 20;
let num2 = 20;
let total: number  = addTwoNumbers(num1, num2);
let total2: number = subTwoNumbers(num1, num2);
let total3: number = timeTwoNumbers(num1, num2);
let total4: number = divTwoNumbers(num1, num2);

console.log('Add:', total);
console.log('Substract:', total2);
console.log('Time:', total3);
console.log('Divide:', total4);
