// Importing external modules
const axios = require('axios');
const _ = require('lodash');

// Class definition
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Inheritance
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Async function to fetch data
async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Arrow function
const greet = (name) => `Hello, ${name}!`;

// Demonstrate class and inheritance
let dog = new Dog('Buddy');
dog.speak();

// Demonstrate fetching data with async/await
fetchData('https://jsonplaceholder.typicode.com/todos/1').then(data => {
    console.log('Fetched data:', data);
});

// Demonstrate lodash usage (chunk function)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const chunked = _.chunk(numbers, 2);
console.log('Chunked array:', chunked);

// Template literals
const person = { name: 'Alice', age: 30 };
console.log(`Person: ${person.name}, Age: ${person.age}`);

// Destructuring
const { name, age } = person;
console.log(`Destructured: Name = ${name}, Age = ${age}`);
