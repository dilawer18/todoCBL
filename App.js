import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './src/Navigation/Routes'

const App = () => {
  return (
    <>
    <Routes/>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})