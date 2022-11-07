

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import { moderateScale, moderateVerticalScale } from '../../styles/responsiveSize';
import styles from './styles';

const Onboarding = ({ navigation }) => {
    return (
        <WrapperContainer >
            <HeaderComp
                text='Todoist'
            />
            <Swiper 
            dotStyle={{height:4,width:50}}
            activeDotStyle={{height:4,width:50}}
            >
                <View>
                    <Image source={imagePath.icFirstOnboard} />
                    <Text>Manage Task</Text>
                </View>
                <View>
                    <Image source={imagePath.icSecondOnboard} />
                    <Text>Manage Task</Text>
                </View>
                <View>
                    <Image source={imagePath.icThird} />
                    <Text>Manage Task</Text>
                </View>
            </Swiper>
            <ButtonComp
                btnText='Sign Up'
            />
            <View style={styles.endFlexStyle}>
                <Text >Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SIGNUP)} >
                    <Text style={styles.endTextStyle}>Sign Up</Text>
                </TouchableOpacity>

            </View>

        </WrapperContainer>
    );
};

export default Onboarding;
