const sendMessage = require('./lib/telegram/methods/sendMessage');
const knmi = require('./lib/knmi_scraper.js');

const token = process.env.TELEGRAM_TOKEN;

function formatWeather(weather) {
  return weather.summary + '\n\n' + weather.description + '\n\n' + weather.descriptionExtended; // eslint-disable-line prefer-template
}

knmi.fetchWeather((weather) => {
  const text = formatWeather(weather);
  
  sendMessage(token, { text, chat_id: '@DutchWeather' }, (response) => {
    console.log(response); // eslint-disable-line no-console
  });
});
