import React, { PureComponent } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

class MainNavigation extends PureComponent {
  render() {
    return (
      <Stack.Navigator headerMode={'screen'}>
        <Stack.Screen
          name="Consulta del clima"
          component={Home}
          options={{
            headerTransparent: true,
            //header: ({ navigation }) => (
            //   <Navbar navigation={navigation} main={true} />
            //),
          }}
        />
      </Stack.Navigator>
    );
  }
}
export default MainNavigation;
