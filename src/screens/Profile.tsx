import { View, Text } from 'react-native'
import React from 'react'
import { AppText, AppView } from '../components'
import styles from '../assets/styles'

const Profile = () => {
  return (
    <AppView style={styles.appContainer}>
      <AppText>Profile</AppText>
    </AppView>
  )
}

export default Profile