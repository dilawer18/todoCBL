import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { moderateScale, moderateScaleVertical } from "../../styles/responsiveSize"


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:24,
        // backgroundColor:colors.bglightGrey,  
    },
    txtStyle:{
        textAlign:'right',
    marginTop:10,
    marginBottom:20,
    },
    orTextStyle:{
        textAlign:'center',
        fontSize:18,
        marginTop:moderateScale(34)
    },
    fontSize:{
        fontSize:12, 
        textAlign:'center', 
        marginTop:moderateScale(24)
    },
    endFlexStyle:{
        marginTop:moderateScale(100),
        justifyContent:'center',
        flexDirection:'row'
    },
    endTextStyle:{
        color: colors.primaryColor
    },socialStyle:{
        flexDirection: "row",
         alignItems: "center", 
         marginTop: 
         moderateScale(20), 
         marginLeft: 54 }
    
})
export default styles