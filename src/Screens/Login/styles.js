import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { moderateScale, moderateScaleVertical } from "../../styles/responsiveSize";


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colors.bglightGrey,
        justifyContent:'space-between',
        flexDirection:'column',
    },
    inputStyle:{
        marginTop:30,
        
    },
    txtStyle:{
    marginTop:10,
    marginBottom:20,
    

    },
    endFlexStyle:{
        justifyContent:'center',
        flexDirection:'row'
    },
    endTextStyle:{ 
        color: colors.primaryColor
     },

});
export default styles