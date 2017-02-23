const queryString = require('querystring');

const baseURL = 'https://api.telegram.org/bot';
const https = require('https');

function performRequest(url, callback) {
  let body = '';
  https.get(url, (response) => {
    response.on('data', (chunk) => {
      body += chunk;
    });
    
    response.on('end', () => {
      callback(JSON.parse(body));
    });
  });
}

module.exports = function executeMethod(method, token, paramaters, callback) {
  const query = queryString.stringify(paramaters);
  performRequest(baseURL + token + '/' + method + '?' + query, callback); // eslint-disable-line prefer-template
};
