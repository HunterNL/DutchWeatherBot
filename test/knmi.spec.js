const { expect } = require('chai');
const { fetchWeather, retrieveWeatherDataFromXML } = require('../lib/knmi_scraper');
const fs = require('fs');

const testXML = fs.readFileSync('./test/testdata.html');

describe('retrieveWeatherDataFromXML', () => {
  const weatherData = retrieveWeatherDataFromXML(testXML);
  
  it('gets the summary', () => {
    expect(weatherData.summary).to.equal('Summary');
  });
  
  it('gets the description', () => {
    expect(weatherData.description).to.equal('Description');  
  });
  
  it('gets the extended description', () => {
    expect(weatherData.descriptionExtended).to.equal('DescriptionExtended');
  });
  
  it('gets the date', () => {
    expect(weatherData.date).to.equal('20/02/2017 21.37 uur LT');
  });
});
