import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { moderateScale, moderateVerticalScale, textScale } from "../../styles/responsiveSize";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'

    },
    headerTextStyle:{
        fontSize:textScale(14),
        color:colors.black,
        fontWeight:'bold',
        marginLeft:moderateScale(10)

    },
    headerStyle:{
        justifyContent:"flex-start"
    },
    lineStyle:{
        // height:200,
       
        borderWidth:0.5,
        width:'90%',
        alignSelf:'center',
        borderColor:colors.bglightGrey

    },imageStyle:{
        transform:[{rotate:'180deg'}]
    },
    textInputStyle:{
        backgroundColor:'white',
        height:300,
        marginTop:24,
        borderRadius:14
    },
    detailViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:moderateVerticalScale(48),
        backgroundColor:colors.white,
        borderRadius:8,
        marginTop:moderateVerticalScale(10),
        alignItems:'center',
        padding:moderateScale(10)
    }
    
    

})