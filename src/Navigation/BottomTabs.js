import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import * as Screens from '../Screens'
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { moderateScale, moderateVerticalScale, width } from '../styles/responsiveSize';
import { create } from 'react-test-renderer';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={styles.container}>
            <Tab.Screen options={{
                tabBarIcon: ({ route, focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colors.primaryColor : null }} source={imagePath.icHome} />
                    )
                }
            }} name={navigationStrings.HOME} component={Screens.Home} />
            <Tab.Screen options={{
                tabBarStyle: { display: "none" },
                tabBarIcon: ({ route, focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colors.primaryColor : null }} source={imagePath.icAlarm} />
                    )
                }
            }} name={navigationStrings.CLOCK} component={Screens.Clock} />
            <Tab.Screen options={{
                tabBarStyle: { display: "none" }, tabBarIconStyle: { position: 'absolute', bottom: Platform.OS === 'ios' ? moderateVerticalScale(20) : moderateVerticalScale(50) }, tabBarIcon: ({ route, focused }) => {
                    return (
                        <Image source={imagePath.icPlus} />
                    )
                }
            }}
                name={navigationStrings.ADD_TASK} component={Screens.AddTask} />
            <Tab.Screen options={{
                tabBarIcon: ({ route, focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colors.primaryColor : null }} source={imagePath.icCalender} />
                    )
                }
            }} name={navigationStrings.CALANDER} component={Screens.Calander} />
            <Tab.Screen options={{
                tabBarIcon: ({ route, focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colors.primaryColor : null }} source={imagePath.icProfile} />
                    )
                }
            }} name={navigationStrings.PROFILE} component={Screens.Profile} />
        </Tab.Navigator>
    )
}

export default BottomTabs

const styles = StyleSheet.create({
    container: {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            position: 'absolute',
            bottom: moderateVerticalScale(20),
            borderRadius: moderateScale(10),
            height: moderateVerticalScale(60),
            marginHorizontal: moderateScale(24),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: moderateScale(26)
        }
    }
})