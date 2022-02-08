import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import CityMenu from '../components/CityMenu';
import List from '../components/List';

const cities = [
  'Buenos Aires',
  'Rio de Janeiro',
  'Lima',
  'Caracas',
  'Santiago',
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.cardsContainer}>
      <CityMenu navigation={navigation} />
      <List navigation={navigation} title="Popular Cities" content={cities} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default Home;
