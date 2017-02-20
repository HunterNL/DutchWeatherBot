const http = require('http');
const cheerio = require('cheerio');

function httpRequest(url, callback) {
  let body = '';
  // 
  http.get(url, (res) => {
    res.on('data', (data) => {
      body += data;
    });
    res.on('end', () => callback(body));
  });
}

function retrieveWeatherDataFromXML(xml) {
  const parsedXML = cheerio.load(xml);
  const summary = parsedXML('.weather__text .intro').text();
  const description = parsedXML('.weather__text > p').first().next('p').text();
  const descriptionExtended = parsedXML('.weather__text > p').next('p').next('p').text();
  const date = parsedXML('.weather__text > .meta').text();
  
  return { summary, description, descriptionExtended, date };
}

function fetchWeather(callback) {
  httpRequest('http://knmi.nl/nederland-nu/weer/verwachtingen', (xml) => {
    callback(retrieveWeatherDataFromXML(xml));
  });
}

module.exports = {
  fetchWeather,
  retrieveWeatherDataFromXML,
};
// 
