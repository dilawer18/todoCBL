import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../styles/colors';
import { height, moderateScale, moderateScaleVertical } from '../styles/responsiveSize';

const HeaderComp = ({
    text,
    image,
    headerStyle,
    textStyles
}) => {
    return (
        <View style={{...styles.container,...headerStyle}}>
            <Image source={image}/>
       
            <Text style={{...styles.textStyle,...textStyles}}>{text}</Text>
            
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        // marginTop:moderateScaleVertical(18),
        justifyContent:'center',
        width:"100%",
        alignItems:'center',
        flexDirection:'row'

    },
    textStyle: {
        fontSize: 34,
        fontWeight: 'bold',
        color:colors.primaryColor
    }
});
export default HeaderComp;
