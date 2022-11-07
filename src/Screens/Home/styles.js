import { StyleSheet } from 'react-native'
import colors from "../../styles/colors";
import { height, moderateScale, moderateVerticalScale, textScale } from "../../styles/responsiveSize";

export default styles = StyleSheet.create({
    heading: {
        fontSize: textScale(14),
        fontWeight: 'bold',
        color: colors.black
    },
    headingDescription: {
        fontSize: textScale(14),
        fontWeight: 'normal',
        color: colors.textLightGrey,
        marginTop: moderateVerticalScale(10)
    },
    progressBarWrapper: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor:
            colors.white,
        height: height / 6,
        marginTop:
            moderateVerticalScale(20),
        borderRadius: moderateScale(8)
    },
    toggleBarStyle: {
        flexDirection: 'row',
        height: moderateVerticalScale(48),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: moderateScale(10)
    }
},

)