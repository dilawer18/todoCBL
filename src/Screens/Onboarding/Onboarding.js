

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import { moderateScale, moderateVerticalScale } from '../../styles/responsiveSize';
import styles from './styles';

const Onboarding = ({ navigation }) => {
    return (
        <WrapperContainer WrapperPadding={moderateScale(24)} >
            <HeaderComp
                text='Todoist'
            />
            <Swiper 
            dotStyle={{height:moderateVerticalScale(4),width:50}}
            activeDotStyle={{height:4,width:50}}
            >
                <View>
                    <Image source={imagePath.icFirstOnboard} />
                    <Text style={styles.slideStyle_1}>Manage Tasks</Text>
                </View>
                <View>
                    <Image source={imagePath.icSecondOnboard} />
                    <Text style={styles.slideStyle_2}>Prioritize wisely</Text>
                </View>
                <View>
                    <Image source={imagePath.icThird} />
                    <Text style={styles.slideStyle_3}>Get Reminder on Time</Text>
                </View>
            </Swiper>
            <View style={{marginHorizontal:14}}>
                <Text style={styles.demyTextStyle}>Update: using PropTypes from prop-types and Change View.propTypes to ViewPropTypes</Text>
                </View>
            <ButtonComp
            style={{}}
                btnText='Sign Up'
            />
            <View style={styles.endFlexStyle}>
                <Text >Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.LOGIN)} >
                    <Text style={styles.endTextStyle}>Log In</Text>
                </TouchableOpacity>

            </View>

        </WrapperContainer>
    );
};

export default Onboarding;
