import React from 'react'
import { View } from "react-native";
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Events, Home, Maps, Profile } from '../screens';
import DrawerRoot from './DrawerRoot';
import styles from '../assets/styles';
import { colors } from '../constants/them';
import { AppIcons } from '../components';

const Tabs = createBottomTabNavigator();

const BottamTab = () => {
  return (
      <Tabs.Navigator 
        initialRouteName='Explore' 
        screenOptions={{headerShown:false,tabBarShowLabel: false,tabBarStyle: styles.tab,}}
        >
        <Tabs.Screen name='Explore' component={DrawerRoot} options={{tabBarIcon: ({ focused }) => <AppIcons type='MaterialIcons' name='explore' size={focused ? 35 : 28 } color={focused ? colors.appBule : colors.darkgray} />}} />
        <Tabs.Screen name='Events' component={Events} options={{tabBarIcon: ({ focused }) => <AppIcons type='Fontisto' name='date' size={focused ? 30 : 25 } color={focused ? colors.appBule : colors.darkgray} />}} />
        <Tabs.Screen name='Maps' component={Maps} options={{tabBarIcon: ({ focused }) => <AppIcons type='FontAwesome' name='map-marker' size={focused ? 35 : 28 } color={focused ? colors.appBule : colors.darkgray} />}} />
        <Tabs.Screen name='Profile' component={Profile} options={{tabBarIcon: ({ focused }) => <AppIcons type='FontAwesome' name='user-circle' size={focused ? 30 : 25 } color={focused ? colors.appBule : colors.darkgray} />}} />
      </Tabs.Navigator>
  )
}

export default BottamTab