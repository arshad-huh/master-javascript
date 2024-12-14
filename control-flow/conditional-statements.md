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
- It is used when a single variable needs to be compared to multiple variants. The comparison is done by checking for strict equality (===)

```javascript
switch (x) {
  case option1:
    // code that is executed when "x === option1" is true
    break;
  case option2:
    // code that is executed when "x === option2" is true
    break;
  default:
    // code that is executed when x does not equal any of the options
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