import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { AppIcons, AppText, AppView } from '../components';
import styles from '../assets/styles';
import SoucualAuth from '../authentication/SoucualAuth';
import { colors } from '../constants/them';
import AppTextInput from '../components/shared/AppTextInput';
import AppButtion from '../components/shared/AppButtion';
interface props{
  navigation : NavigationProp<any>
}

const Signup: React.FC<props> = ({ navigation }) => {
  return (
    <AppView style={{flex:1}}>
      <View style={{width:'100%',alignItems:'center'}}>
        <View style={{ width: '100%', paddingLeft: '10%',paddingTop:10}}>
          <TouchableOpacity style={{ marginVertical: 40 }} onPress={() => navigation.goBack()}>
            <AppIcons type='AntDesign' name='arrowleft' color={colors.backgroundColor} size={25} />
          </TouchableOpacity>
          <AppText style={{ marginBottom: 20, fontSize:20, fontWeight: '400' }}>Sign Up</AppText>
        </View>
        <AppTextInput iconLeftType='FontAwesome' iconLeft='user-circle-o' placeholder='Full name' />
        <AppTextInput iconLeftType='Feather' iconLeft='mail' placeholder='abc@gmail.com' />
        <AppTextInput iconLeftType='Entypo' iconLeft='lock' password placeholder='Your Passowrd' />
        <AppTextInput iconLeftType='Entypo' iconLeft='lock' password placeholder='Confirm Passowrd' />
        <AppButtion contenerStyle={styles.btnPsw} title="SIGN UP" onPress={()=> navigation.navigate('Varification')} />      
        <AppText style={{fontSize:15,paddingVertical:10}}>OR</AppText>
        <SoucualAuth />
      </View>
    </AppView>
  )
}

export default Signup;