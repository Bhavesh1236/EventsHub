import { View, Text, Image } from 'react-native'
import React from 'react'
import { colors, sizes } from '../../constants/them'
import styles from '../../assets/styles'
import AppText from '../shared/AppText'
import images from '../../constants/images'

interface props{
    name:string,
    image:string,
    following:number,
    followers:number,
}
const ProfileModal: React.FC<props> = ({name, image, followers, following}) => {
  return (
    <View style={{justifyContent:'center', alignItems:'center', paddingVertical:sizes.padding}}>
        <Image source={image} style={{width:150,height:150, borderRadius:150}} resizeMode='stretch' />
        <AppText  numberOfLines={1} style={[styles.font1,{paddingVertical:sizes.padding}]}>{name}</AppText>
        <View style={{flexDirection:'row'}}>
            <View style={{borderRightWidth: 1, borderColor: colors.backgroundColor, alignItems:'center',paddingHorizontal:sizes.padding}}>
                <AppText style={styles.font2}>{following}</AppText> 
                <AppText style={styles.font2}>Following</AppText> 
            </View>
            <View style={{alignItems:'center',paddingHorizontal:sizes.padding}}>
                <AppText style={styles.font2}>{followers}</AppText> 
                <AppText style={styles.font2}>Followers</AppText> 
            </View>
        </View>
    </View>
  )
}

export default ProfileModal