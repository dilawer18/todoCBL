import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { moderateScale, textScale } from "../../styles/responsiveSize";

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
    noteStyle:{
        height:200,
        alignItems:'flex-start',

    },imageStyle:{
        transform:[{rotate:'180deg'}]
    },
    

})