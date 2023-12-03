import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AppView from './AppView'
import AppText from './AppText'
import AppIcons from './AppIcons'
import { colors, sizes, fonts } from '../../constants/them'
import styles from '../../assets/styles'

interface props {
    title: string,
    onPress: Function,
    contenerStyle?: string,
    isBoder?: boolean,
    icon?: string
}

const AppButionCustom:React.FC<props> = ({ onPress, title, contenerStyle, isBoder, icon }) => {
  let color = isBoder ? colors.appBule : colors.white;
  return (
    <AppView>
      <TouchableOpacity onPress={onPress}>
        <View style={[{flexDirection:'row', justifyContent:'center',alignItems:'center', padding:sizes.base},contenerStyle]}>
          {icon && <View style={{paddingLeft:15}}>
            <AppIcons color={color} size={sizes.icon2} type='Feather' name={icon} /> 
          </View>}
            {/* user-plus, message-circle */}
            <AppText style={{...fonts.h2, color:color,paddingHorizontal:15}}>{title}</AppText>
        </View>
      </TouchableOpacity>
    </AppView>
  )
}

export default AppButionCustom