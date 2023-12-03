import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {AppView, AppText, AppIcons} from '..'
import { colors, sizes } from '../../constants/them'

const AppSearch = () => {
  return (
    <View style={{width:'100%', height:50, flexDirection: 'row', justifyContent:'flex-start', alignItems:'center',paddingHorizontal:20}}>
      <AppIcons type='FontAwesome' name='search' color={colors.backgroundColor} size={20}/>
      <TextInput placeholder='Search...' placeholderTextColor={"#999"} style={{marginHorizontal:10, color: '#555',width:'65%',borderLeftWidth:1, paddingLeft:5}} />
      <TouchableOpacity style={{flexDirection:'row',backgroundColor:colors.secondary,borderRadius:50,padding:sizes.base,alignItems:'center'}}>
        <View style={{padding:3,backgroundColor:colors.darkgray2,borderRadius:50,marginRight:5}}>
          <AppIcons type='Ionicons' name='filter-sharp' color={colors.backgroundColor} size={15}/>
        </View>
        <AppText>Filter</AppText>
      </TouchableOpacity>
    </View>
  )
}

export default AppSearch