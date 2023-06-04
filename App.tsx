import React,{ useEffect } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,LogBox } from 'react-native';
import { NavigationContainer, DarkTheme, NavigationProp, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import LanuchScreen from './src/screens/LanuchScreen';
import Home from './src/screens/Home';
import Onboarding from './src/screens/Onboarding';
import { colors } from './src/constants/them';

const Stack = createStackNavigator();
const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    border: colors.primaryDark,
  }
};

export default function App() {

  LogBox.ignoreAllLogs();

  const [loaded] = useFonts({
    'Roboto-Black': require('./src/assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Light': require('./src/assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf')
  });

  if(!loaded){   
    return null;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LanuchScreen' screenOptions={{ headerShown:false }}>
        <Stack.Screen name='LanuchScreen' component={LanuchScreen} />
        <Stack.Screen name='Onboarding' component={Onboarding} />        
        <Stack.Screen name='Home' component={Home} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});