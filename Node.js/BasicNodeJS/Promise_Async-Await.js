const https = require('https');

//Example promise: Function to Read the http response for a url and return a promise
function fetch (url) {
  //DEFINE A PROMISE
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (rd) => data = data + rd);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

//Below, the fetch promise will be consumed twice, once with the regular .then syntax, and another time with the async/await syntax. 
fetch('https://www.javascript.com/')
  .then(data => {
    //.then exposes the data available after the async action
    console.log(data.length);
  });
//-or- consume any promise using the async/await feature. Must call the async method to execute the action. 
(async function read() {
  const data = await fetch('https://www.javascript.com/');
  //await = use the keyword await before the promise, to get access to the data available after the async action.
  console.log(data.length);
})();