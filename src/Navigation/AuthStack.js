import { View, Text } from 'react-native'
import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import * as Screens from '../Screens'


const AuthStack = (Stack) => {
  return (
    <>
      <Stack.Screen name={navigationStrings.ONBOARDING} component={Screens.Onboarding} />
      <Stack.Screen name={navigationStrings.LOGIN} component={Screens.Login} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={Screens.Signup} />
      <Stack.Screen name={navigationStrings.ADD_TASK} component={Screens.AddTask} />
    </>
  )
}

export default AuthStack