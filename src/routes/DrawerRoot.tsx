import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, useWindowDimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { Bookmark, Calender, Home, Profile, Settings } from '../screens';
import styles from '../assets/styles';
import { AppIcons, AppText, AppView } from '../components';
import images from '../constants/images';
import { colors } from '../constants/them';
import { NavigationProp } from '@react-navigation/native';

interface props{
  navigation: NavigationProp<any>
}

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({props,navigation}) => {  
  return (
    <DrawerContentScrollView {...props}>
      <AppView>
        <View style={styles.header}>
          <Image source={images.user} style={styles.profileImage} />
          <AppText style={styles.username}>Bhavesh Kumarkhaniya.</AppText>
        </View>
        <TouchableOpacity style={styles.planButton} onPress={()=> console.log("test") }>
          <Image source={images.king} style={{width:20,height:20, resizeMode:'contain'}} /> 
          <AppText style={{paddingLeft: 34, fontSize: 14,fontWeight: 'bold',color: 'cyan'}}>Upgrade Pro</AppText>
        </TouchableOpacity>
        <DrawerItemList {...props} />
        <DrawerItem label="Helps & FAQs" icon={ ({ focused, color, size }) => <AppIcons type='Feather' color={color} size={size} name='help-circle' />} onPress={() => Linking.openURL('https://mywebsite.com/help')} />
        <TouchableOpacity style={styles.SignOutButton} onPress={()=> navigation.reset({routes: [{ name: 'Login' }],}) }>
          <AppIcons type='MaterialCommunityIcons' color={'cyan'} size={23} name='logout' />
          <AppText style={{paddingLeft: 34, fontSize: 15,fontWeight: 'bold',color: 'cyan'}}>Sign Out</AppText>
        </TouchableOpacity>
      </AppView>
    </DrawerContentScrollView>
  );
};

const Contact = () => {
  <AppView style={styles.appContainer}>
    <TouchableOpacity onPress={()=> console.log("test pres")}>
      <AppText>Contact Us</AppText>
    </TouchableOpacity>
  </AppView>
}

const Signout = () => {
  <AppView>
    <TouchableOpacity onPress={()=> console.log("test log :-> ", navigation)}> 
    {/* navigation.reset({routes: [{ name: 'Login' }],}) */}
      <AppText>Sign Out</AppText>
    </TouchableOpacity>
  </AppView>
}

const DrawerRoot: React.FC<props> = ({navigation}) => {  
  const dimensions = useWindowDimensions(); // dimensions.width >= 768 ? 'permanent' : 'front'
  const isLargeScreen = dimensions.width >= 768;
  return (
      <Drawer.Navigator screenOptions={{headerShown: false,drawerType:isLargeScreen ? 'permanent' : 'back',drawerStyle: isLargeScreen ? null : { width: '100%' }, drawerStyle:{ backgroundColor:colors.textColor,}}} drawerContent={(props) => <CustomDrawerContent props={props} navigation={navigation} />} >
        <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: "My Profile", drawerIcon: ({color,size}) => <AppIcons type='Feather' color={color} size={size} name='user' /> }}/>
        <Drawer.Screen name="Calender" component={Calender} options={{ drawerIcon: ({color,size}) => <AppIcons type='FontAwesome' color={color} size={size} name='calendar-o' /> }}/>
        <Drawer.Screen name="Bookmark" component={Bookmark} options={{ drawerIcon: ({color,size}) => <AppIcons type='Feather' color={color} size={size} name='bookmark' /> }}/>
        <Drawer.Screen name="Settings" component={Settings} options={{ drawerIcon: ({color,size}) => <AppIcons type='Feather' color={color} size={size} name='settings' /> }}/>
        <Drawer.Screen name="Contact" component={Contact} options={{ drawerLabel: "Contact Us", drawerIcon: ({color,size}) => <AppIcons type='Feather' color={color} size={size} name='mail' /> }}/>
      </Drawer.Navigator>
  );
}

export default DrawerRoot;