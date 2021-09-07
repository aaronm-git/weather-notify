import axios from "axios";

const baseUrl = "http://api.weatherapi.com/v1";

export const getWeather = (url) => {
  return axios
    .get(
      baseUrl +
        `/current.json?key=${process.env.REACT_APP_weatherApiKey}&q=${url}`,
      { timeout: 2000 }
    )
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const weatherAutoComplete = (query) => {
  console.log("query:", query);
  // ie = https://api.weatherapi.com/v1/search.json?key=8e580fae76ce4d789ed190021210609&q=mia
  return axios
    .get(
      baseUrl +
        `/search.json?key=${process.env.REACT_APP_weatherApiKey}&q=${query}`,
      { timeout: 2000 }
    )
    .then((res) => {
      const results = res.data;
      // results.forEach((result) => {
      //   result.cityName = result.name.split(",")[0].trim();
      // });
      return results;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
