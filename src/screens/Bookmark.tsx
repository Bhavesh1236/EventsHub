import { View, Text } from 'react-native'
import React from 'react'
import { AppText, AppView } from '../components'
import styles from '../assets/styles'

const Bookmark = () => {
  return (
    <AppView style={styles.appContainer}>
      <AppText>Bookmark</AppText>
    </AppView>
  )
}

export default Bookmark