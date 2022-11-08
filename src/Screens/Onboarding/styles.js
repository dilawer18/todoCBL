import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { moderateVerticalScale } from "../../styles/responsiveSize";

export default styles = StyleSheet.create({
    endFlexStyle:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop:moderateVerticalScale(10)
    },
    container: {
        flex: 1,
        // marginTop:moderateVerticalScale(10)
       
     
    },
    endTextStyle:{ 
        color: colors.primaryColor,
        // 
     },
     slideStyle_1:{
        marginTop:48, 
        fontWeight:'bold',
        color:colors.primaryColor,
        fontSize:24,
        alignSelf:'flex-start'
     },
     slideStyle_2:{
        marginTop:48,
        fontWeight:'bold',
        color:colors.primaryColor,
        fontSize:24,
        alignSelf:'flex-start'

    },
    slideStyle_3:{
        marginTop:48,
        fontWeight:'bold',
        color:colors.primaryColor,
        fontSize:24,
        alignSelf:'flex-start'
    },
    demyTextStyle:{
        marginTop:24, 
        marginBottom:24,
        fontSize:14,alignSelf:'flex-start',
        fontWeight:'bold',
        color:colors.textLightGrey
    }
})