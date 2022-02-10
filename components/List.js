import React, { PureComponent } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import { Text } from 'react-native-paper';

class List extends PureComponent {
  render() {
    const { navigation, title, content } = this.props;
    console.log(content);
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={content}
            renderItem={({ item }) => (
              <Card navigation={navigation} city={item} />
            )}
            horizontal={false}
            numColumns="3"></FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});
export default List;
