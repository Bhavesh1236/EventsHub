import { View, Text, FlatList,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppButionCustom, AppIcons, AppText, AppView, ProfileModal,  } from '../components'
import styles from '../assets/styles'
import AppHeader from '../components/shared/AppHeader'
import { useNavigation } from '@react-navigation/native'
import images from '../constants/images'
import { colors, sizes } from '../constants/them'

const Profile = () => {
  const navigation = useNavigation();
  return (
    <AppView style={{flex:1}}>
      <AppHeader title='Profile' isMore={false} isBack={false} onPress={()=>navigation.goBack()} />
      <ProfileModal name='Bhavesh Kumarkhaniya' image={images.user} followers={346} following={350} />
      <AppButionCustom contenerStyle={styles.btn1} isBoder title="Edit Profile" onPress={()=> console.log("test")} icon='edit' />
      <View style={{padding:sizes.padding, }}>
        <AppText style={styles.font2}>About me</AppText>
        <AppText style={styles.font3}>Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase.</AppText>
      </View>
      <View style={{flexDirection:'row'}}>
        <AppText>Interest</AppText>
        <TouchableOpacity style={styles.btn2} onPress={()=> console.log("test")}>
          <AppIcons type='Feather' name='edit-3' color={colors.appBule} size={sizes.icon} />
          <AppText>Change</AppText>
        </TouchableOpacity>
      </View>
    </AppView>
  )
}

export default Profile