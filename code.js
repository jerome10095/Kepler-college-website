const newFunction = new Function('a', 'b', 'return a + b');
console.log(newFunction(2, 3)); // Output: 5
// The Function constructor creates a new function object.
// The first arguments are the parameter names, and the last argument is the function body as a string.
// In this example, we create a function that takes two parameters (a and b) and returns their sum.
    