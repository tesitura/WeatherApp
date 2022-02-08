import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
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
      <List navigation={navigation} title="Popular Cities" content={cities} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
