import { View, Text } from 'react-native'
import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import * as Screens from '../Screens'
import BottomTabs from './BottomTabs'


const MainStack = (Stack) => {
  return (
    <>
      <Stack.Screen name={navigationStrings.BTM} component={BottomTabs} />
    </>
  )
}

export default MainStack