import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './components/Login';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import NewItem from './components/NewItem';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Stack.Screen name='NewItem' component={NewItem} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
