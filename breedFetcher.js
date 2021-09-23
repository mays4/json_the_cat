const request = require('request');
const breed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log(` ${error}`);
    return;
  }
  //console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  if (data[0].description) {
    console.log(data[0].description);
  } else {
    console.log(`${breed} not found`);
  }
  //console.log("type",typeof data);
 
});