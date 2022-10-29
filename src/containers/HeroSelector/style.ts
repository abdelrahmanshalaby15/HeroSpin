import EStyleSheet from "react-native-extended-stylesheet";
import { COLORS } from "../../styles/constants";

export const styles = EStyleSheet.create({
    mainContainer:{
        backgroundColor: COLORS.white,
        width:"100%",
        height:"100%",
        flexDirection:"column"
    },
    heroCard:{
        backgroundColor: COLORS.white,
        flex:1/2,
        margin:"1rem",
        alignItems:"center",
        borderRadius:"1rem",
    },
    cardImage:{
        width:"100%",
        aspectRatio:1,
        resizeMode:"cover",
        borderTopLeftRadius:"1rem",
        borderTopRightRadius:"1rem",
    },
    heroName:{
        textSize:"3rem",
        fontWeight:"bold",
        color:COLORS.dark_grey,
        margin:"1rem",

    }

})