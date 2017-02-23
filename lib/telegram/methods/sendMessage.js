const executeMethod = require('./executeMethod');

module.exports = function sendMessage(token, parameters, callback) {
  executeMethod('sendMessage', token, parameters, callback);
};
