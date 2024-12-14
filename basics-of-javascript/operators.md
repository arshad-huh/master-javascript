# Operators
- `a + b`
  - Here, `a + b` => Expression
  - `a` and `b` => Operands
  - `+` => Operator

## Arithmetic Operators
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Modulus (remainder)
- `**` Exponentiation

```javascript
let sum = 5 + 3;       // 8
let difference = 10 - 4; // 6
let product = 3 * 4;    // 12
let quotient = 15 / 3;  // 5
```

## Unary Operators
### Arithmetic
  - `+` Unary Plus => Converts to number
  - `-` Unary Minus => Converts to number and then negates it
  - `++` Increment
    - Prefix: Increments the value before using it in the expression
    - Postfix: Uses the current value in the expression and then increments it
  - `--` Decrement => same as above
  
| Feature | Pre-increment ( `++x` ) | Post-increment ( `x++` ) |
|---|---|---|
| Order of Operations | Increment, then return | Return, then increment |
| Value Returned | New (incremented) value | Original value |

```javascript
let x = 5;
let y = ++x; 

// x is now 6
// y is 6 (the incremented value of x)


let a = 5;
let b = a++;

// a is now 6 (incremented after the value was assigned to b)
// b is 5 (the original value of a)
```

### Non - Arithmetic
  - `!` Logical NOT => Inverts the boolean value of its operand.
  - `~` Bitwise NOT
  - `typeof` => Returns a string indicating the data type of its operand.
  - `delete` => The delete operator deletes a property from an object.
  - `void` => The void operator evaluates an expression and discards its return value.
  
```javascript
let x = "5";
let y = +x;  // Converts to number
let z = !true; // false
```

## Comparison Operators
- `==` Loose equality (type coercion)
- `===` Strict equality (no type coercion)
- `!=` Loose inequality
- `!==` Strict inequality
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal to
- `<=` Less than or equal to

```javascript
5 == "5"   // true
5 === "5"  // false
```
**Note:** the comparison operators above can also be used to compare strings. In that case, a dictionary (lexicographical) order is applied.

## Logical Operators
- `&&` AND
- `||` OR
- `!` NOT

```javascript
let a = true, b = false;
console.log(a && b);  // false
console.log(a || b);  // true
console.log(!a);      // false
```

## Assignment Operators
- `=` Simple assignment
- `+=` Add and assign
- `-=` Subtract and assign
- `*=` Multiply and assign
- `/=` Divide and assign

```javascript
let x = 5;
x += 3;  // x is now 8
```

## Ternary Operator
- 3 Operands
- Shorthand for if-else
```javascript
let status = age >= 18 ? "Adult" : "Minor";
```

## Bitwise Operator


## Short Circuiting
- The process of evaluating expressions from left to right and stopping as soon as the result is determined.
- Short-circuiting is a behavior in JavaScript's logical operators (&& and ||) where the second operand is not evaluated if the result of the expression can be determined solely from the first operand.

**How it works:**
- `&&` (AND operator): If the first operand is falsy, the second operand is not evaluated and the expression returns the value of the first operand.
- `||` (OR operator): If the first operand is truthy, the second operand is not evaluated and the expression returns the value of the first operand.

```javascript
let lemons = 5; // Assuming you have 5 lemons

// Using && operator
lemons && document.write("foo gave me a bar"); 

// Using if statement
if (lemons) {
  document.write("foo gave me a bar");
}



let hasInternet = true; 
let hasBattery = false; 

// Using || operator
hasInternet || alert("No internet connection!"); 

// Using if statement
if (!hasInternet) {
  alert("No internet connection!");
}
```

## PEDMAS Rule (Order of Operations)
1. Parenthesis
2. Exponents
3. Division and Multiplication (left to right)
4. Addition and Subtraction (left to right)