import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Calander = () => {
  return (
    <View style={styles.container}>
      <Text>Calander</Text>
    </View>
  )
}

export default Calander
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})