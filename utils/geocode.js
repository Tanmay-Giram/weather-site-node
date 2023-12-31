const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    '".json?access_token=pk.eyJ1IjoidG5teS05OTkiLCJhIjoiY2xrdmEyeGdvMDNiZDNjbHdkbDlwNTRvMyJ9.87wvM_8NGlIrxGJB6a9C7Q&limit=1';

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.statusCode == 200) {
      body = response.body;
      if (error) {
        callback("Unable to connect to location services!", undefined);
      } else if (body.features.length === 0) {
        callback("Unable to find location. Try another search.", undefined);
      } else {
        callback(undefined, {
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0],
          location: body.features[0].place_name,
        });
      }
    } else {
      callback("Unable to connect to location services!", undefined);
    }
  });
};

module.exports = geocode;
