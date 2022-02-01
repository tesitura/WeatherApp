import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getWeatherByCityId, getWeatherByCityName } from '../services/services';

const Detail = ({ route, navigation }) => {
  const city = route.params.city;

  const [weatherDetail, setWeatherDetail] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getWeatherByCityName(city).then(weatherData => {
      setWeatherDetail(weatherData);
      setLoaded(true);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>I am a detail</Text>
      <Text>{city}</Text>
      {/* Check if we have weather information  */}
      {loaded && weatherDetail && (
        <View>
          <Text>City: {weatherDetail.name}</Text>
          <Text>Temp: {weatherDetail.main.temp}</Text>
          <Text>Temp Max: {weatherDetail.main.temp_max}</Text>
          <Text>Temp Min: {weatherDetail.main.temp_min}</Text>
          <Text>Humidity: {weatherDetail.main.humidity}</Text>
          <Text>Pressure: {weatherDetail.main.pressure}</Text>
          <Text>Feels: {weatherDetail.main.feels_like}</Text>
          {/* Iterate over weather details */}
          {weatherDetail.weather.map(info => {
            return (
              <View key={info.id}>
                <Text>Main: {info.main}</Text>
                <Text>Description: {info.description}</Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Detail;
