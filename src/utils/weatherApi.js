import axios from "axios";

const baseUrl = "http://api.weatherapi.com/v1";

export const getWeather = (lat, lon) => {
  const paramaters = [`q=${lat + lon}`];
  try {
    axios
      .get(
        baseUrl +
          "/current.json?" +
          [`key=${process.env.REACT_APP_weatherApiKey}`, ...paramaters].join(
            "&"
          )
      )
      .then((result) => {
        console.log(result);
        return result.data;
      });
  } catch (error) {
    console.error(error);
    return error.message;
  }
};

export const weatherAutoComplete = (query) => {
  // ie = https://api.weatherapi.com/v1/search.json?key=8e580fae76ce4d789ed190021210609&q=mia
  try {
    return axios
      .get(
        baseUrl +
          "/search.json?" +
          `key=${process.env.REACT_APP_weatherApiKey}&q=${query}`
      )
      .then((res) => {
        const results = res.data;
        results.forEach((result) => {
          result.cityName = result.name.split(",")[0].trim();
        });
        return results;
      });
  } catch (error) {
    console.error(error);
    return error.message;
  }
};
