import EStyleSheet from "react-native-extended-stylesheet";
import { COLORS } from "../../styles/constants";

export const styles = EStyleSheet.create({
    mainContainer:{
        backgroundColor: COLORS.flame,
        padding: "1rem",
        borderRadius:"2rem",
        marginVertical:"1rem",
        justifyContent:"center",
        alignItems:"center",

    },
    text:{
        color:COLORS.white,
        fontSize:"1rem"
    }
})