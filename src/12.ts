// Example code for a TypeScript function that takes an array of numbers and returns the sum of those numbers
function sumArray(numbers: number[]): number {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
