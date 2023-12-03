import { View, Text } from 'react-native'
import React from 'react'
import { AppText, AppView } from '../components'
import styles from '../assets/styles'

const Calender = () => {
  return (
    <AppView style={styles.appContainer}>
      <AppText>Calender</AppText>
    </AppView>
  )
}

export default Calender