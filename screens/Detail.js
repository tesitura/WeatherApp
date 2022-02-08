import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  getWeatherEvery3HoursByCityName,
  getWeatherByCityName,
} from '../services/services';
import Weather from '../components/Weather';
import CityMenu from '../components/CityMenu';

const Detail = ({ route, navigation }) => {
  const city = route.params.city;

  const [weatherDetail, setWeatherDetail] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getWeatherEvery3HoursByCityName(city).then(weatherData => {
      setWeatherDetail(weatherData);
      setLoaded(true);
    });
  }, []);

  const followingDays = ['1', '2', '3', '4', '5'];

  return (
    <View style={styles.container}>
      {/* Check if we have weather information  */}
      {loaded && weatherDetail && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>{city}</Text>
          <Weather
            navigation={navigation}
            weatherDetail={weatherDetail}
            isToday={true}
            day="0"
          />
          <Text style={styles.title}>Next 5 days</Text>
          {followingDays.map(day => {
            return (
              <Weather
                navigation={navigation}
                weatherDetail={weatherDetail}
                isToday={false}
                day={day}
                key={day}
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 32,
    margin: 5,
  },
});

export default Detail;
