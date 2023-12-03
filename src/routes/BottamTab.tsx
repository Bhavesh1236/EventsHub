import React from 'react'
import { View } from "react-native";
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Events, Home, Maps, Profile } from '../screens';
import DrawerRoot from './DrawerRoot';
import styles from '../assets/styles';
import { colors } from '../constants/them';
import { AppIcons } from '../components';
import AddEvents from '../components/models/AddEvents';

const Tabs = createBottomTabNavigator();

const BottamTab = () => {
  return (
      <Tabs.Navigator 
        initialRouteName='Explore' 
        screenOptions={{headerShown:false,tabBarShowLabel: false,tabBarStyle: styles.tab,}}
        >
        <Tabs.Screen name='Explore' component={DrawerRoot} options={{tabBarIcon: ({ focused }) => <AppIcons type='MaterialIcons' name='explore' size={focused ? 35 : 28 } color={focused ? colors.blue : colors.darkgray} />}} />
        <Tabs.Screen name='Events' component={Events} options={{tabBarIcon: ({ focused }) => <AppIcons type='Fontisto' name='date' size={focused ? 30 : 25 } color={focused ? colors.blue : colors.darkgray} />}} />
        <Tabs.Screen name='Add' component={AddEvents} options={{tabBarIconStyle: styles.addEvent ,tabBarIcon: ({focused}) => <View style={styles.icon}><AppIcons type='MaterialIcons' name='add-box' size={35} color={focused ? colors.blue : colors.darkgray} /></View>}} />
        <Tabs.Screen name='Maps' component={Maps} options={{tabBarIcon: ({ focused }) => <AppIcons type='FontAwesome' name='map-marker' size={focused ? 35 : 28 } color={focused ? colors.blue : colors.darkgray} />}} />
        <Tabs.Screen name='Profile' component={Profile} options={{tabBarIcon: ({ focused }) => <AppIcons type='FontAwesome' name='user-circle' size={focused ? 30 : 25 } color={focused ? colors.blue : colors.darkgray} />}} />
      </Tabs.Navigator>
  )
}

export default BottamTab