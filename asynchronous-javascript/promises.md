## Promises
```javascript
// Creating a promise
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { id: 1, name: 'John' };
    resolve(data);
  }, 1000);
});

// Consuming promises
fetchData
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Chaining promises
fetchData
  .then(data => {
    console.log(data);
    return fetchMoreData(data);
  })
  .then(moreData => console.log(moreData))
  .catch(error => console.error(error));
```