import React from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors';

const WrapperContainer = ({
  children,
  bgColor = colors.white,
  statusBarColor = colors.white,
  barStyle = 'dark-content',
  WrapperPadding = 0,
  mainContainer
}) => {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: statusBarColor}}>
        <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
        <View style={{backgroundColor: bgColor,  flex: 1, padding:WrapperPadding, ...mainContainer}}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default WrapperContainer;
