import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsteroidScreen from '../screens/AsteroidScreen/Asteroid';
import AsteroidDetailScreen from '../screens/AsteroidDetailScreen/AsteroidDetail';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AsteroidScreen"
        screenOptions={{
          gestureEnabled: true,
        }}>
        <Stack.Screen
          name="Asteroid Screen"
          component={AsteroidScreen}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen
          name="AsteroidDetailScreen"
          component={AsteroidDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
