const convertToCelsius = function(celsiusWannaBe) {
  return Math.round(((celsiusWannaBe - 32) * 5/9) * 10) / 10
};

const convertToFahrenheit = function(farenheitWannaBe) {
  return Math.round(((farenheitWannaBe * 9/5) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
