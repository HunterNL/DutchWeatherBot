// require('./lib/telegram_api.js');
const knmi = require('./lib/knmi_scraper.js');

knmi.fetchWeather((weather) => {
  console.log(weather);
});
