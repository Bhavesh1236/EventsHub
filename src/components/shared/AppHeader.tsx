import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {AppView, AppText, AppIcons} from '../index'
import { colors, sizes, fonts } from '../../constants/them'
import images from '../../constants/images'
import styles from '../../assets/styles'
import { StatusBar } from 'expo-status-bar';
import { useThemeColor } from '../functions'
import { NavigationProp } from '@react-navigation/native'

interface props {
  title: string,
  isBack?: boolean,
  isSearch?: boolean,
  isMore?: boolean,
  onPress?: Function,
  onPressSearch?: Function,
  contenerStyle?: string,
  style?: string,
  textStyle?: string,
  navigation: NavigationProp<any>
}

const AppHeader: React.FC<props> = ({ onPress, title, isBack, isSearch, isMore, contenerStyle, style, textStyle, navigation, onPressSearch }) => {
  return (
    <AppView style={[{width:'100%',flexDirection:'row', paddingTop:45, paddingHorizontal:sizes.radius, alignItems:'center'},contenerStyle]}>
      {/* left icons  */}
      <StatusBar style={useThemeColor({dark : "light", light:"dark"})} />

      <View style={{width:'75%', flexDirection:'row', alignItems:'center'}}>
        {isBack === true ? <TouchableOpacity onPress={onPress}>
          <AppIcons color={colors.backgroundColor} size={sizes.icon2} type='Fontisto' name='arrow-left' />
        </TouchableOpacity> : null }
        <View> 
          <AppText style={[textStyle, {...fonts.h1, paddingLeft:sizes.radius}]}>{title}</AppText>
        </View>
      </View>

      {/* Right icons */} 
      <View style={{flexDirection:'row',justifyContent:'flex-end',width:'25%',}}> 
        {isSearch === true && <TouchableOpacity onPress={onPressSearch}>
          <AppIcons type='FontAwesome' name='search' size={sizes.icon2} color={colors.backgroundColor} />
        </TouchableOpacity>}
        {isMore === false ? null : <TouchableOpacity>
          <AppIcons type='Entypo' name='dots-three-vertical' size={sizes.icon2} color={colors.backgroundColor} />
        </TouchableOpacity>}        
      </View>
      
    </AppView>
  )
}

export default AppHeader