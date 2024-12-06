function foo(a, b) {
  // Check if either a or b is null or undefined
  if (a == null || b == null) {
    return 0; // Return 0 or handle error appropriately. 
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-numeric inputs
  }
  return a + b;
}

console.log(foo(1, 2));    // Output: 3
console.log(foo(null, 2));  // Output: 0
console.log(foo(undefined, 2)); // Output: 0
console.log(foo(1, undefined)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo('a', 2)); // Output: NaN