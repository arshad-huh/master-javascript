// Variables

// Declare a variable using let and assign it a string value. Then, change its value to a number.
let myString = 'Arshad';
myString = 20;

// What will happen if you try to reassign a value to a variable declared with const? Try it with an example.
const constVariable = 10;
// constVariable = 20;
// TypeError: Assignment to constant variable

// Write code to demonstrate the difference between var, let, and const in terms of scoping.
if (true) {
    var x = 'var';
    let y = 'let';
    const z = 'const';
}

//console.log(x); // 'var'
//console.log(y); // ReferenceError: y is not defined
//console.log(z); // ReferenceError: z is not defined


// Create a variable with a descriptive name to store a user's full name. Use camelCase.
let userFullName = 'Arshad Ahmad';


// Data Types
// Use typeof to find the data type of a variable that holds the value null. What do you observe?
let nullVariable = null;
console.log(typeof nullVariable); // "object" 


// Convert a string "42" into a number and demonstrate it with code.
let str = '42';
let num = +str;
console.log(num);
// OR 
num = Number(str);
console.log(num);


// Strings

// Write code to concatenate two strings using both the + operator and template literals.
let str1 = 'Hello';
let str2 = 'Arshad';

console.log(str1 + ' ' + str2);
console.log(`${str1} ${str2}`);

// Create a multiline string using a template literal and include a variable inside it.
let name = 'Arshad';

let multilineString = `
Name: ${name}
Age: 20
`;


// Write a program that takes a string, removes leading and trailing whitespaces using trim(), and converts it to uppercase.
let strH = '   Hello, World!   ';
console.log(strH.trim().toUpperCase());

// Operators

// Write a program to demonstrate the difference between == and === with examples.
console.log(5 == "5");  // Output: true (loose equality allows type coercion)
console.log(5 === "5"); // Output: false (strict equality checks type and value)

// Use the ternary operator to assign a value to a variable based on whether another variable is greater than 10.
let a = 5;
let result = a > 10 ? "Greater than 10" : "Smaller than 10";
console.log(result);

// Write a program to calculate the remainder when 25 is divided by 4 using the modulus operator.
// Arithmetic and Logical Operators
// Write a program that increments a variable by 1 using both prefix and postfix notation. Print the results.
// Use the logical && operator to check if two variables are greater than 5.
// Write a program that demonstrates the use of ! to invert a boolean value.
// Comparison Operators
// Compare the strings "apple" and "Apple" using both > and <. Explain the result.
// Check if the number 5 is loosely equal to the string "5". Then, check if they are strictly equal.
// Assignment Operators
// Initialize a variable with a value of 10. Use the += operator to add 5 to it, and print the result.
// Use the /= operator to divide a variable holding the value 20 by 4, and print the updated value.