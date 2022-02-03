import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getWeatherByCityId, getWeatherByCityName } from '../services/services';
import Weather from '../components/Weather';
import WeatherNextDays from '../components/WeatherNextDays';

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
      {/* Check if we have weather information  */}
      {loaded && weatherDetail && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Weather navigation={navigation} weatherDetail={weatherDetail} />
          <Text style={styles.title}>Next 5 days</Text>
          <WeatherNextDays
            navigation={navigation}
            weatherDetail={weatherDetail}
          />
          <WeatherNextDays
            navigation={navigation}
            weatherDetail={weatherDetail}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 36,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 32,
    margin: 10,
  },
});

export default Detail;
