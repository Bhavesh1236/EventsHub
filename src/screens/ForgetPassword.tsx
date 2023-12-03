import { View } from 'react-native'
import React from 'react'
import { AppIcons, AppText, AppView } from '../components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationProp } from '@react-navigation/native'
import { colors } from '../constants/them'
import AppTextInput from '../components/shared/AppTextInput'
import AppButtion from '../components/shared/AppButtion'
import styles from '../assets/styles'

interface props{
    navigation: NavigationProp<any>
}
const ForgetPassword: React.FC<props> = ({ navigation }) => {

  return (
    <AppView style={{flex:1}}>
      <View style={{width:'100%',alignItems:'center'}}>
            <View style={{ flexDirection:'row', justifyContent: 'space-between',width:'100%',alignItems:'flex-start',paddingLeft:'10%',paddingRight: '8%', paddingTop: 10}}>
                <TouchableOpacity style={{ marginVertical: 40 }} onPress={() => navigation.goBack()}>
                    <AppIcons type='AntDesign' name='arrowleft' color={colors.backgroundColor} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 40 }} onPress={() => navigation.goBack()}>
                    <AppIcons type='Feather' name='more-vertical' color={colors.backgroundColor} size={25} />
                </TouchableOpacity>
            </View>
            <View style={{width:'100%',alignItems:'flex-start',paddingHorizontal: '10%', marginBottom: '5%'}}>
                <AppText style={{marginBottom:20, fontSize:28, fontWeight: '500', fontFamily: 'Roboto-Bold'}}>Reset Password</AppText>
                <AppText style={{marginBottom:20, fontSize:22, fontWeight: '100', fontFamily: 'Roboto-Medium'}}>Please enter your email address to request a password reset.</AppText>
            </View>
            <AppTextInput iconLeftType='Feather' iconLeft='mail' placeholder='abc@gmail.com' />
            <AppButtion contenerStyle={styles.btnPsw} title="SEND" onPress={()=> navigation.reset({routes: [{ name: 'Login' }],})} />          
        </View>
    </AppView>
  )
}

export default ForgetPassword