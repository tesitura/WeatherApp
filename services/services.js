import axios from 'axios';

const apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'appid=499a8b8749089316ff980a5a810ef619';

// Get weather by City Name
export const getWeatherByCityName = async name => {
  const resp = await axios.get(`${apiUrl}?q=${name}&${apiKey}&units=metric`);
  return resp.data;
};
