import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Headline, Subheading } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import {
  getWeatherEvery3HoursByCityName,
  getWeatherByCityName,
} from '../services/services';
import Weather from '../components/Weather';

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
          <Headline style={styles.title}>{city}</Headline>
          <Weather
            navigation={navigation}
            weatherDetail={weatherDetail}
            isToday={true}
            day="0"
          />
          <Subheading style={styles.title}>Next 5 days</Subheading>
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
      {!loaded && (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="grey" />
        </View>
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
    paddingTop: 15,
    margin: 5,
  },
  activity: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Detail;
