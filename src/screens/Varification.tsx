import { View } from 'react-native'
import React, { useState } from 'react'
import { AppIcons, AppText, AppView } from '../components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationProp } from '@react-navigation/native'
import { colors } from '../constants/them'
import AppTextInput from '../components/shared/AppTextInput'
import AppButtion from '../components/shared/AppButtion'

interface props{
  navigation: NavigationProp<any>
}

const Varification:React.FC<props> = ({ navigation }) => {
  const [state, setState] = useState({
    number: '+91 7096394852',
    time: '0:20'
  })
  return (
    <AppView style={{flex:1}}>
      <View style={{width:'100%',alignItems:'center'}}>
            <View style={{ flexDirection:'row', justifyContent: 'space-between',width:'100%',alignItems:'flex-start',paddingLeft:'10%',paddingRight: '8%', paddingTop:10}}>
                <TouchableOpacity style={{ marginVertical: 40 }} onPress={() => navigation.goBack()}>
                    <AppIcons type='AntDesign' name='arrowleft' color={colors.backgroundColor} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 40 }} onPress={() => navigation.goBack()}>
                    <AppIcons type='Feather' name='more-vertical' color={colors.backgroundColor} size={25} />
                </TouchableOpacity>
            </View>
            <View style={{width:'100%',alignItems:'flex-start',paddingHorizontal: '10%', marginBottom: '5%'}}>
                <AppText style={{marginBottom:20, fontSize:28, fontWeight: '500', fontFamily: 'Roboto-Bold'}}>Varifaction</AppText>
                <AppText style={{marginBottom:20, fontSize:22, fontWeight: '100', fontFamily: 'Roboto-Medium'}}>{`we've send you the verifation cpde on ${state.number}`}.</AppText>
            </View>
            <AppTextInput iconLeftType='Feather' iconLeft='mail' placeholder='abc@gmail.com' />
            <AppButtion title="CONTINUE" onPress={()=> navigation.reset({routes: [{ name: 'BottamTab' }],})} />
            <View style={{flexDirection:'row'}}>
              <AppText>Re-send code in </AppText>
              <TouchableOpacity onPress={() => console.log(" is call time expand")}>
                <AppText style={{color:colors.darkgreen}}>{state.time}.</AppText>
              </TouchableOpacity>
            </View>
        </View>
    </AppView>
  )
}

export default Varification