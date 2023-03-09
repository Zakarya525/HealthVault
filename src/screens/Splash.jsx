import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Loader from '../components/Loader'

const Splash = () => {
  return (
    <View style={styles.container}>
      <Header text="HealthVault" />
      <Loader />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});