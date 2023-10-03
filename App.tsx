import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './Profile';
import Settings from './Settings';
import AsNever from './AsNever';
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
        <Stack.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
        <Stack.Screen name="test" component={AsNever} options={{ title: 'test' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
