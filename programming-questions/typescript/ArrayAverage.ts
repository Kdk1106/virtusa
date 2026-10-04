const numbers: number[] = [10, 20, 30, 40, 50];

let sum = 0;

for (const num of numbers) {
    sum += num;
}

const average = sum / numbers.length;

console.log("Average =", average);
