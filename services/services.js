import axios from 'axios';

const apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'appid=499a8b8749089316ff980a5a810ef619';

// Get weather by City ID
export const getWeatherByCityId = async id => {
  const resp = await axios.get(`${apiUrl}?id=${id}&${apiKey}`);
  return resp.data;
};
