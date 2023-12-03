import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { AppText, AppView, AppIcons } from '../components';
import { HttpGet,HttpPost } from '../utility/Http';
import images from "../constants/images"
import { InputType } from '../constants/constant';
import { colors } from '../constants/them';
import SoucualAuth from '../authentication/SoucualAuth';
import { NavigationProp } from '@react-navigation/native';
import AppTextInput from '../components/shared/AppTextInput';
import AppButtion from '../components/shared/AppButtion';
import styles from '../assets/styles';

interface props{
  navigation: NavigationProp<any>
}

const Login: React.FC<props> = ({ navigation }) => {
  const [state, setState] = useState({
    isCheck: false,
  })
  
  return (
    <AppView style={styles.appContainer}>
      <View style={styles.AppView1}>
        <Image source={images.appIcon} style={styles.imgApp} />
        <AppText style={styles.appLoginText}>EventHub</AppText>
      </View>
      <View style={{width:'80%', justifyContent:'center'}}>
        <AppText style={styles.appLoginText}>Sign in</AppText>
      </View>
      <AppTextInput iconLeftType='Feather' iconLeft='mail' placeholder='Enter youe Username' />
      <AppTextInput iconLeftType='Entypo' iconLeft='lock' password placeholder='Enter youe password' />
      <View style={{flexDirection:'row', justifyContent: 'space-between', width: '80%', paddingVertical:10}}>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={() => setState(state => ({isCheck: !state.isCheck}))}>
          {state.isCheck ?  
            <AppIcons type='FontAwesome' name='check-square' size={20} color={colors.blue} /> : 
            <AppIcons type='Feather' name='square' size={20} color={colors.darkgray} />}
          <AppText style={{paddingLeft:10}}>Remember Me</AppText>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingTop:3}} onPress={() => navigation.navigate('ForgetPassword')}>
          <AppText>Forget password?</AppText>
        </TouchableOpacity>
      </View>
      <AppButtion contenerStyle={styles.btnSign} title="SIGN IN" onPress={()=> navigation.reset({routes: [{ name: 'BottamTab' }],})} />
      <AppText style={{fontSize:15,paddingVertical:10}}>OR</AppText>
      <SoucualAuth />
      <View style={[styles.row,styles.btnSign]}>
        <AppText>Don't have an account? </AppText>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <AppText style={{color:colors.darkgreen}}>Sgin Up.</AppText>
        </TouchableOpacity>
      </View>
    </AppView>
  )
}

export default Login