/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './src/screens/Home';
import Length from './src/screens/Length';
import Temp from './src/screens/Temp';
import Volume from './src/screens/Volume';

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3d3d3d"
      barStyle={{backgroundColor: 'black'}}>
      <Tab.Screen name="Length" component={Length} options={{}} />
      <Tab.Screen name="Temp" component={Temp} />
      <Tab.Screen name="Volume" component={Volume} />
    </Tab.Navigator>
  );
}

const App = () => {
  const linking = {
    prefixes: ['deeplinking://', 'QuantityMeasurement://','https://QuantityMeasurement.com'],
    config: {
      screens: {
        Home: {
          screens: {
            Length: {
              path: 'Length/:user',
            },
            Temp: {
              path: 'Temp/:query',
            },
          },
        },
        Volume: {
          path: 'Volume/:message',
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Converters" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
