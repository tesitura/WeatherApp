import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { PureComponent } from 'react';

class Card extends PureComponent {
  render() {
    const { navigation, city } = this.props;
    console.log(city);

    const images = {
      'Buenos Aires': require('../assets/images/buenos-aires.png'),
      'Rio de Janeiro': require('../assets/images/buenos-aires.png'),
      Caracas: require('../assets/images/montevideo.png'),
      Lima: require('../assets/images/montevideo.png'),
      Santiago: require('../assets/images/montevideo.png'),
    };
    const cityImage = images[city];

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Detail', { city: city })}>
        <Image resizeMode="cover" style={styles.image} source={cityImage} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    margin: 3,
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  cityName: {
    position: 'absolute',
    width: 100,
    textAlign: 'center',
    top: 10,
  },
});

export default Card;
