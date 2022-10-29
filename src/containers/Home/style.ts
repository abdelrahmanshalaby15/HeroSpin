import EStyleSheet from "react-native-extended-stylesheet";
import { COLORS } from "../../styles/constants";

export const styles = EStyleSheet.create({
    mainContainer:{
        backgroundColor: COLORS.white,
        height:"100%",
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"column",
    },
    buttonsContainer:{
        width:"50%",
    },
    logo:{
        width:"70%",
        maxHeight:"20%",
    }
})