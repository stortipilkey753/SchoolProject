import { assert } from "console";

export function add(a: number, b: number): number {
  assert(Number.isInteger(a) && Number.isInteger(b));
  
  let sum = a + b;
  
  return sum;
}

// Example usage:
console.log(add(2, 3)); // Output should be 5
