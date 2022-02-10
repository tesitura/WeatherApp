import { Image, StyleSheet, View } from 'react-native';
import React, { PureComponent } from 'react';
import { Text } from 'react-native-paper';

class Navbar extends PureComponent {
  render() {
    const { navigation, main } = this.props;

    return (
      <View style={styles.mainNav}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
        <Text style={styles.title}>
          {' '}
          {main ? 'OpenWeather App' : 'Detalles del clima'}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    margin: 10,
  },
  mainNav: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Navbar;
