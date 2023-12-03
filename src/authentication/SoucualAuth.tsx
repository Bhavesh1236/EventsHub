import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AppText, AppView } from '../components'
import images from '../constants/images'
import styles from '../assets/styles'
import { colors } from '../constants/them'
import { useThemeColor } from '../components/functions'

const SoucualAuth = () => {
    return (
        <AppView style={{paddingBottom:10,width:'80%'}}>
            <TouchableOpacity style={[styles.soucual,{backgroundColor:colors.backgroundColor}]}>
                <Image source={images.google} style={{width:20,height:20}} />
                <AppText style={{color: colors.textColor, paddingLeft:30}}>Login With Google</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.soucual,{backgroundColor:colors.backgroundColor}]}>
                <Image source={images.fb} style={{width:20,height:20}} />
                <AppText style={{color: colors.textColor, paddingLeft:30}}>Login With Facebook</AppText>
            </TouchableOpacity>
        </AppView>
    )
}

export default SoucualAuth