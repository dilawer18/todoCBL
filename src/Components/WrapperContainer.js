import React from 'react';
import {StatusBar, View, ActivityIndicator} from 'react-native';
import colors from '../styles/colors';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { moderateScale } from '../styles/responsiveSize';

const WrapperContainer = ({
  children,
  bgColor = colors.white,
  statusBarColor = colors.white,
  barStyle = 'dark-content',
  WrapperPadding = 0,
}) => {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: statusBarColor}}>
        <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
        <View style={{backgroundColor: bgColor,  flex: 1, padding:WrapperPadding}}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default WrapperContainer;
