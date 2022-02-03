import { Image, StyleSheet, Text, View } from 'react-native';
import React, { PureComponent } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';

class Weather extends PureComponent {
  render() {
    const { navigation, weatherDetail } = this.props;

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
    };

    return (
      <Grid>
        <Row size={1} style={styles.row}>
          <Text style={styles.title}>{weatherDetail.name}</Text>
        </Row>
        <Row size={1} style={[styles.temperature, styles.row]}>
          <Text style={styles.temperatureNum}>
            {Math.round(weatherDetail.main.temp)}º
          </Text>

          {weatherDetail.weather.map(info => {
            return (
              <View key={info.id} style={styles.description}>
                <Image source={weatherImages[info.icon]} />
                <Text style={styles.descriptionText}>{info.description}</Text>
              </View>
            );
          })}
        </Row>
        <Row size={1} style={styles.row}>
          <Text style={styles.temperatureMaxMin}>
            Max: {weatherDetail.main.temp_max}
            {'\n'}Min: {weatherDetail.main.temp_min}
          </Text>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  temperature: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  temperatureNum: {
    fontSize: 42,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  description: {
    backgroundColor: 'cornsilk',
    justifyContent: 'space-around',
  },
  descriptionText: {
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  temperatureMaxMin: { fontSize: 20 },
  row: { backgroundColor: 'linen', borderRadius: 7, padding: 5 },
});
export default Weather;
