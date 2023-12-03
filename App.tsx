import 'react-native-gesture-handler';
import React,{ useEffect } from 'react';
import { StyleSheet, Text, View,LogBox } from 'react-native';
import { NavigationContainer, DarkTheme, NavigationProp, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { colors } from './src/constants/them';
import { Login,LanuchScreen,Onboarding,Signup,Varification,ForgetPassword } from './src/screens';
import BottamTab from './src/routes/BottamTab';

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
        <Stack.Screen name='Login' component={Login} />        
        <Stack.Screen name='Signup' component={Signup} />        
        <Stack.Screen name='Varification' component={Varification} />        
        <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
        <Stack.Screen name='BottamTab' component={BottamTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}