import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  { label: 'Buenos Aires', value: 'Buenos Aires' },
  { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
  { label: 'Lima', value: 'Lima' },
  { label: 'Caracas', value: 'Caracas' },
  { label: 'Santiago', value: 'Santiago' },
];

const CityMenu = ({ navigation }) => {
  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown]}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={'Select a city'}
        value={value}
        onChange={item => {
          navigation.navigate('Detail', { city: item.value });
        }}
        renderLeftIcon={() => (
          <MaterialCommunityIcons
            style={styles.icon}
            color={'black'}
            name="city"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default CityMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdown: {
    flex: 3,
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    margin: 8,
  },
  icon: {
    marginRight: 5,
  },
});
