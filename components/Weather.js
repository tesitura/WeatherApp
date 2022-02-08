import { Image, StyleSheet, Text, View } from 'react-native';
import React, { PureComponent } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import dateFormat from 'dateformat';

// Converts Unix UTC format date to a valid Date for processing
const convertDate = unixUtcFormat => {
  return dateFormat(new Date(unixUtcFormat * 1000), 'dddd, dS mmmm');
};

// Calculate following 5 days on 3 hours bands
const consecutiveDays = [0, 8, 16, 24, 32, 39];

class Weather extends PureComponent {
  render() {
    const { navigation, weatherDetail, day, isToday } = this.props;

    const weatherImages = {
      '01d': require('../assets/images/weather-icons/01d.png'),
      '02d': require('../assets/images/weather-icons/02d.png'),
      '03d': require('../assets/images/weather-icons/03d.png'),
      '04d': require('../assets/images/weather-icons/04d.png'),
      '09d': require('../assets/images/weather-icons/09d.png'),
      '10d': require('../assets/images/weather-icons/10d.png'),
      '11d': require('../assets/images/weather-icons/11d.png'),
      '13d': require('../assets/images/weather-icons/13d.png'),
      '50d': require('../assets/images/weather-icons/50d.png'),
      '01n': require('../assets/images/weather-icons/01d.png'),
      '02n': require('../assets/images/weather-icons/02d.png'),
      '03n': require('../assets/images/weather-icons/03d.png'),
      '04n': require('../assets/images/weather-icons/04d.png'),
      '09n': require('../assets/images/weather-icons/09d.png'),
      '10n': require('../assets/images/weather-icons/10d.png'),
      '11n': require('../assets/images/weather-icons/11d.png'),
      '13n': require('../assets/images/weather-icons/13d.png'),
      '50n': require('../assets/images/weather-icons/50d.png'),
    };

    return (
      <Grid>
        <Row size={1} style={styles.row}>
          <Text style={styles.day}>
            {convertDate(weatherDetail.list[consecutiveDays[day]].dt)}
          </Text>
        </Row>
        <Row size={1} style={[styles.temperature, styles.row]}>
          <Text style={styles.temperatureNum}>
            {Math.round(weatherDetail.list[consecutiveDays[day]].main.temp)}º
          </Text>
          <View style={styles.description}>
            <Image
              source={
                weatherImages[
                  weatherDetail.list[consecutiveDays[day]].weather[0].icon
                ]
              }
            />
            <Text style={styles.descriptionText}>
              {weatherDetail.list[consecutiveDays[day]].weather[0].description}
            </Text>
          </View>
        </Row>
        <Row size={1} style={styles.row}>
          <Text style={styles.temperatureMaxMin}>
            Max: {weatherDetail.list[consecutiveDays[day]].main.temp_max}
            {'\n'}Min: {weatherDetail.list[consecutiveDays[day]].main.temp_min}
          </Text>
        </Row>
        {isToday && (
          <Row size={1} style={styles.row}>
            <Text style={styles.temperatureMaxMin}>
              Humidity: {weatherDetail.list[0].main.humidity}%{'\n'}Pressure:{' '}
              {weatherDetail.list[0].main.pressure} Pa
            </Text>
          </Row>
        )}
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  day: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  temperature: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  temperatureNum: {
    fontSize: 42,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  description: {
    backgroundColor: 'cornsilk',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  temperatureMaxMin: { fontSize: 20 },
  row: {
    backgroundColor: 'linen',
    borderRadius: 7,
    padding: 5,
    paddingLeft: 15,
  },
});
export default Weather;
