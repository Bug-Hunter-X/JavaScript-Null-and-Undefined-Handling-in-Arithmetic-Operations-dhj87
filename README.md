# JavaScript Null and Undefined Handling

This repository demonstrates a common error in JavaScript when performing arithmetic operations with variables that might be null or undefined. The example shows how to properly handle these cases to avoid unexpected results.

The `bug.js` file contains the original code with the potential error. The `bugSolution.js` file provides a more robust solution that addresses the null and undefined issue and avoids unexpected behavior. 

**Problem:**
The original code directly attempts to add `a` and `b`, which can cause issues if they are null or undefined.

**Solution:**
The solution uses a more appropriate method to handle potential null or undefined values, using a combination of type checking and optional chaining.  It provides clearer error handling.

**Lessons Learned:**
* Always check for null and undefined values before performing operations that might not work with them.
* Consider using optional chaining (?.) for concise null checks.