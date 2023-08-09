const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=0a82bdc4c6628b5f968dd500d30a8857&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      console.log(
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out .But it feels like " +
          body.current.feelslike +
          " degrees out."
      );
    }
  });
};
module.exports = forecast;
