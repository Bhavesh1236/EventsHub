import { View, Text } from 'react-native'
import React from 'react'
import { AppText, AppView } from '../components'
import styles from '../assets/styles'

const Settings = () => {
  return (
    <AppView style={styles.appContainer}>
      <AppText>Settings</AppText>
    </AppView>
  )
}

export default Settings