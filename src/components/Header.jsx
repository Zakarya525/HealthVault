import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react'

const Header = ({text}) => {
  return (
    <View>
      <Icon name="hand-holding-medical" size={40} color="#0000FF" />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
   text: {
    fontSize: 40
   }
})