var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
function divide(a, b) {
    return a / b;
}
var multiply = function (a, b) {
    return a * b;
};
var logger = function (message) {
    console.log(message);
};
var throwError = function (message) {
    throw new Error(message);
};
var forecast = {
    date: new Date(),
    weather: 'sunny'
};
var logWeather = function (forecast) {
    console.log(forecast.date);
    console.log(forecast.weather);
};
logWeather(forecast);
