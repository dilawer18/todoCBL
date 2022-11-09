import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { height, moderateScale, moderateVerticalScale, textScale } from "../../styles/responsiveSize";

export default styles = StyleSheet.create({
    container: {
        flex: 0.8,
        // justifyContent: "center",
        // alignItems: 'center'
        // height: height / 3,
        backgroundColor: colors.white,
        width: '100%',
        borderRadius: moderateScale(12),
        marginTop: moderateVerticalScale(30),
        marginBottom: moderateVerticalScale(20),
    },
    headerTextStyle: {
        fontSize: textScale(14),
        color: colors.black,
        fontWeight: 'bold',
        marginLeft: moderateScale(10)

    },
    headerStyle: {
        justifyContent: "flex-start"
    },

    imageStyle: {
        transform: [{ rotate: '180deg' }]
    },

    detailViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: moderateVerticalScale(48),
        backgroundColor: colors.white,
        borderRadius: 8,
        // marginTop: moderateVerticalScale(10),
        alignItems: 'center',
        padding: moderateScale(10)
    }



})