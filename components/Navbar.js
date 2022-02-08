import { Image, StyleSheet, Text, View } from 'react-native';
import React, { PureComponent, useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Bs As', value: 'Buenos Aires' },
  { label: 'Rio', value: 'Rio de Janeiro' },
  { label: 'Lima', value: 'Lima' },
  { label: 'Caracas', value: 'Caracas' },
  { label: 'Santiago', value: 'Santiago' },
];

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
