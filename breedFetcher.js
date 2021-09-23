const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(`the request failed:${error}`,null);
      return;
    }
    //console.log('error:', error); // Print the error if one occurred
    //callback('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    const data = JSON.parse(body);
    if (data[0].description) {
      callback(null,data[0].description);
    } else {
      callback(`${breedName} not found`,null);
    }
    //console.log("type",typeof data);
    
  });
};



module.exports = { fetchBreedDescription };