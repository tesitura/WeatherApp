import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  { label: 'Buenos Aires', value: 'Buenos Aires' },
  { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
  { label: 'Lima', value: 'Lima' },
  { label: 'Caracas', value: 'Caracas' },
  { label: 'Santiago', value: 'Santiago' },
];

const CityMenu = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.label, isFocus && { color: 'blue' }]}></Text>;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select city' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setIsFocus(false);
          navigation.navigate('Detail', { city: item.value });
        }}
        renderLeftIcon={() => (
          <MaterialIcons
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
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
  logo: {
    width: 70,
    height: 60,
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: 'white',
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
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
