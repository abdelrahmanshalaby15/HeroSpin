import EStyleSheet from "react-native-extended-stylesheet";
import { COLORS } from "../../styles/constants";

export const styles = EStyleSheet.create({
    mainContainer:{
        backgroundColor: COLORS.white,
        width:"100%",
        height:"100%",
        flexDirection:"column"
    },
    poster:{
        width:"100%",
        height:500,

    },
    title:{
        color:COLORS.flame,
        fontSize:"1.5rem",
        fontWeight:"bold",
        padding:"1rem",
    }
})