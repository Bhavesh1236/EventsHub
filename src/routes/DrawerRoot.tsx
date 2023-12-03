import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { Bookmark, Calender, Home, Profile, Settings } from '../screens';
import styles from '../assets/styles';
import { AppIcons, AppText, AppView } from '../components';
import images from '../constants/images';
import { colors } from '../constants/them';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <AppView style={{flex:1}}>
        <View style={styles.header}>
          <Image source={images.user} style={styles.profileImage} />
          <AppText style={styles.username}>Bhavesh Kumarkhaniya.</AppText>
        </View>
        <TouchableOpacity style={{flexDirection:'row',backgroundColor:colors.primaryDark,padding:10,paddingLeft:12, marginVertical:20, marginHorizontal:10,borderRadius:6}}>
          <Image source={images.king} style={{width:20,height:20, resizeMode:'contain'}} /> 
          <AppText style={{paddingLeft: 34, fontSize: 14,fontWeight: 'bold',color: 'cyan'}}>Upgrade Pro</AppText>
        </TouchableOpacity>
        <DrawerItemList {...props} />
      </AppView>
    </DrawerContentScrollView>
  );
};

const Contact = () => {
  <AppView style={styles.appContainer}>
      <AppText>Contact Us</AppText>
  </AppView>
}

const Helps = () => {
  <AppView style={styles.appContainer}>
      <AppText>Helps and faqs</AppText>
  </AppView>
}

const Signout = () => {
  <AppView style={styles.appContainer}>
      <AppText>Sign Out</AppText>
  </AppView>
}

export default function DrawerRoot() {
  return (
      <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={(props) => <CustomDrawerContent {...props} />} >
        <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: "My Profile", drawerIcon: ({color,size}) => <AppIcons type='Feather' color={color} size={size} name='user' /> }}/>
        <Drawer.Screen name="Calender" component={Calender} options={{ drawerIcon: ({color,size}) => <AppIcons type='FontAwesome' color={color} size={size} name='calendar-o' /> }}/>
        <Drawer.Screen name="Bookmark" component={Bookmark} options={{ drawerIcon: ({color,size}) => <AppIcons type='Feather' color={color} size={size} name='bookmark' /> }}/>
        <Drawer.Screen name="Settings" component={Settings} options={{ drawerIcon: ({color,size}) => <AppIcons type='Feather' color={color} size={size} name='settings' /> }}/>
        <Drawer.Screen name="Contact" component={Contact} options={{ drawerLabel: "Contact Us", drawerIcon: ({color,size}) => <AppIcons type='Feather' color={color} size={size} name='mail' /> }}/>
        <Drawer.Screen name="Helps" component={Helps} options={{ drawerLabel: "Helps & FAQs", drawerIcon: ({color,size}) => <AppIcons type='Feather' color={color} size={size} name='help-circle' /> }}/>
        <Drawer.Screen name="Signout" component={Signout} options={{ drawerLabel: "Sign Out", drawerIcon: ({color,size}) => <AppIcons type='MaterialCommunityIcons' color={color} size={size} name='logout' /> }}/>
      </Drawer.Navigator>
  );
}
