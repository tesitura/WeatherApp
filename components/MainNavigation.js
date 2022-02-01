import React, { PureComponent } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

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
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    );
  }
}
export default MainNavigation;
