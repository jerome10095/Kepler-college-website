const newFunction = new Function('a', 'b', 'return a + b');
console.log(newFunction(2, 3)); // Output: 5
// The Function constructor creates a new function object.
// The first arguments are the parameter names, and the last argument is the function body as a string.
// In this example, we create a function that takes two parameters (a and b) and returns their sum.
    async function fetchData(url) {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const data = await response.json();
            console.log(data.name); // Output: undefined, because the JSON data does not have a 'name' property
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }