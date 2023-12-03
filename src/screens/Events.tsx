import { View, Text } from 'react-native'
import React from 'react'
import { AppText, AppView } from '../components'
import styles from '../assets/styles'

const Events = () => {
  return (
    <AppView style={styles.appContainer}>
      <AppText>Events</AppText>
    </AppView>
  )
}

export default Events