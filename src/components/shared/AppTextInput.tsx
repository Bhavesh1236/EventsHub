import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { AppView, AppText, AppIcons } from '../index';
import images from '../../constants/images';
import { colors } from '../../constants/them';

interface props {
    iconLeft ?: string,
    iconLeftType ?: "Entypo"| "Ionicons" | "AntDesign"| "EvilIcons"| "Feather"| "FontAwesome"| "Fontisto"| "Foundation"| "MaterialIcons",
    iconSize ?: number,  
    placeholder?: string,
    password ?: boolean,
    error ?: string
}

const AppTextInput : React.FC<props> = ({ iconLeft,iconLeftType,placeholder,iconSize,password,error }) => {
  const [state, setState] = useState({
    isPassword : Boolean(password),
  })
  return (
    <AppView style={{width:'80%',}}>
        <AppView style={{ borderWidth: 1, borderColor: colors.gray, borderRadius: 10, flexDirection: 'row', padding: 10,marginVertical:10, alignItems:'center',}}>
          {iconLeft && <AppIcons color={colors.gray} name={iconLeft} size={iconSize || 20} type={iconLeftType} />}
          <TextInput
            placeholder={placeholder || 'Enter value'}
            placeholderTextColor={colors.gray}
            style={{marginHorizontal:10, color: '#555',flex: 1}}
            secureTextEntry={state.isPassword}
          />
          {password && <TouchableOpacity onPress={()=> setState(state => ({ isPassword : !state.isPassword}) )}>
            <AppIcons color={colors.gray} name={state.isPassword ? 'eye-with-line' : 'eye'} size={20} type='Entypo' />
          </TouchableOpacity>}
        </AppView>
       {error && <AppText style={{paddingTop: 5, paddingLeft: 10}} >{error}</AppText>}
    </AppView>
  )
}

export default AppTextInput