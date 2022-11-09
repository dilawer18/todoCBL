import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, width } from '../styles/responsiveSize'
import colors from '../styles/colors'


const TextInputComp = ({
    img,
    title = '',
    value = '',
    onchangeText = () => { },
    placeholder = '',
    Styles,
    imageStyle,
    TextInputStyle,
    placeholderTextColor,
    onPress= () => {}
}) => {
    return (
        <View>
            {!!title && <Text style={{ ...styles.textStyle, ...Styles }}>{title}</Text>}
            <View style={{ ...styles.container, ...Styles }}>
                <TextInput
                    style={{ ...TextInputStyle, ...styles.inputstyle }}
                    value={value}
                    onChangeText={onchangeText}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                />
                {!!img && <TouchableOpacity onPress={onPress} > 
                    <Image style={imageStyle} source={img} />
                </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default TextInputComp

const styles = StyleSheet.create({
    container: {
        // height: moderateScale(48),
        // marginTop: moderateScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        borderRadius: 8,
        paddingHorizontal: moderateScale(10)

    },
    textStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.primaryColor
    },
    inputstyle: {
        height: moderateVerticalScale(48),
        width: '100%'
    }
})