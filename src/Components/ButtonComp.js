import React from 'react';
import { StyleSheet, TouchableOpacity,Text } from 'react-native';
import colors from '../styles/colors';
import { height, moderateScale } from '../styles/responsiveSize';

const ButtonComp = ({
        btnText = '',
        onPress = () => { },
        btnImage,
        btnWrapperStyle,
        btnTextStyle ={},
    }) => {
    return (
        <TouchableOpacity style={{...styles.container,...btnWrapperStyle}}
            onPress={onPress}>
            <Text style={{...styles.textStyle,...btnTextStyle }}>{btnText}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor:colors.primaryColor,
        alignItems:'center',
        justifyContent:'center',
        height:moderateScale(42),
        borderRadius:8
    },
    textStyle:{
    color:'white'
    }
})
export default ButtonComp;
