## Truthy and Falsy Values

#### Falsy Values
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

#### Example of Implicit Type Coercion
```javascript
if (0) {
  console.log("This won't run");
}

if ("hello") {
  console.log("This will run");
}
```