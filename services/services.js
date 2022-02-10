import axios from 'axios';

const apiUrl = 'http://api.openweathermap.org/data/2.5/';
// TODO, use Github Secrets to store apikey
const apiKey = 'appid=499a8b8749089316ff980a5a810ef619';

// Get weather by City Name
export const getWeatherByCityName = async name => {
  const resp = await axios.get(
    `${apiUrl}weather?q=${name}&${apiKey}&units=metric`,
  );
  return resp.data;
};

// Get weather for 5 days with data every 3 hours by City Name
export const getWeatherEvery3HoursByCityName = async name => {
  const resp = await axios.get(
    `${apiUrl}forecast?q=${name}&${apiKey}&units=metric`,
  );
  return resp.data;
};
