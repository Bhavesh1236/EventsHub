import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {AppView, AppText, AppIcons} from '..'
import { colors } from '../../constants/them'
import images from '../../constants/images'
import styles from '../../assets/styles'

interface props {
  title: string,
  onPress: Function,
  contenerStyle?: string,
  style?: string,
  textStyle?: string
}
const AppButtion: React.FC<props> = ({ onPress, title, contenerStyle, style, textStyle }) => {
  return (
    <AppView style={[{width:'80%'},contenerStyle]}>
      <TouchableOpacity style={[{backgroundColor: colors.appBule, borderRadius:10,paddingVertical: 13, marginVertical: 10,width: '100%'},style]} onPress={onPress}>
        <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}> 
          <AppText style={[textStyle]}>{title}</AppText>
          <View style={{position: 'absolute', right: 30}}>
            <Image source={images.right} style={styles.imgApp2} />
          </View>
        </View>
      </TouchableOpacity>
    </AppView>
  )
}

export default AppButtion