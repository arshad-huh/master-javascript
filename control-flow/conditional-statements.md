# Conditional Statements
- Conditional statements in JavaScript allow you to control the flow of your program based on specific conditions.
- They enable us to execute different blocks of code depending on whether certain conditions are true or false.

## If-Else Statements
```javascript
if (condition1) {
  // code that is executed if "condition1" is true
} else if (condition2) {
  // code that is executed if "condition2" is true
  // but "condition1" was false
} else {
  // code that is executed otherwise
}
```
**Note:** We can also use Truthy and falsy values instead of conditions.

## Switch Statements
```javascript
switch (expression) {
  case value1:
    // Code to execute if expression matches value1
    break;
  case value2:
    // Code to execute if expression matches value2
    break;
  // ... more cases
  default:
    // Code to execute if none of the cases match
}


let dayOfWeek = "Sunday";

switch (dayOfWeek) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Friday":
    console.log("It's Friday!");
    break;
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("It's another day.");
}
```