import EStyleSheet from "react-native-extended-stylesheet";
export const globalStyles = EStyleSheet.create({
    shadowEnabled:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,  
        elevation: 5,
    }
}) 