## Error Handling

#### Try...Catch
```javascript
try {
  // Potentially risky code
  const result = riskyFunction();
} catch (error) {
  console.error('An error occurred:', error.message);
} finally {
  // Code that runs regardless of success or failure
  console.log('Cleanup');
}

// Throwing custom errors
function validateAge(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  return age;
}
```