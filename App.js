import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Routes from './src/Navigation/Routes'
import { getLang } from './src/utils/utils';
import strings from './src/constants/lang';
import store from './src/redux/store';
import {Provider} from "react-redux"

const App = () => {

  // useEffect(() => {
  // getCurrLang();
  // }, []);

  // const getCurrLang = async () => {
  //   let curr_lang = await getLang();
  //   strings.setLanguage(curr_lang)
  //   console.log(curr_lang, 'curr langugae ===>>>>>');
  //   console.log(strings.getLanguage(), 'get language ==>>>>>>');
  //   console.log(strings.HELLO, 'currrenty strings ===>>>>>>>');
  // }


  return (
   <>
    <Provider store ={store}>
    <Routes/>
    </Provider>
    </>
  
  )
}

export default App

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   }
// })
