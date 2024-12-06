function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  } else if (a === undefined || b === undefined) {
    return undefined; // Handle undefined values
  }
  return a + b; // The actual logic for the function
}

console.log(foo(1, 2));    // Output: 3
console.log(foo(null, 2));  // Output: null
console.log(foo(undefined, 2)); // Output: undefined
console.log(foo(1, undefined)); // Output: undefined
console.log(foo(null, null)); // Output: null