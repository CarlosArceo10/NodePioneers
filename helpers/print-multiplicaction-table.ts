export function printMultiplicationTable(base:number, limit: number = 10): void {
    if (limit <= 0) {
        throw new  Error('El límite tiene que ser positivo');
    }
    for (let i = 1; i <= limit; i++ ) {
        console.log(`Ciclo for ${base} x ${i} = ${base * i}`);
    }
}