import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { PureComponent } from 'react';

class Card extends PureComponent {
  render() {
    const { navigation, city } = this.props;

    const images = {
      'Buenos Aires': require('../assets/images/cities/buenos-aires.png'),
      'Rio de Janeiro': require('../assets/images/cities/rio-de-janeiro.png'),
      Caracas: require('../assets/images/cities/caracas.png'),
      Lima: require('../assets/images/cities/lima.png'),
      Santiago: require('../assets/images/cities/santiago.png'),
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
});

export default Card;
