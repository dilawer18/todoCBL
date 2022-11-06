

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';

// create a component
const Onboarding = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComp
            text='Todoist'
            />
            <Swiper>
                <View>
                    <Image source={imagePath.icFirstOnboard}/>
                    <Text>Manage Task</Text>
                </View>
                <View>
                <Image source={imagePath.icSecondOnboard}/>
                <Text>Manage Task</Text>
                </View>
                <View>
                <Image source={imagePath.icThird}/>
                <Text>Manage Task</Text>
                </View>
            </Swiper>
            <Button
            title='Login'
            onPress={()=>{navigation.navigate(navigationStrings.LOGIN)}}
            />
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
     
    },
});

//make this component available to the app
export default Onboarding;
