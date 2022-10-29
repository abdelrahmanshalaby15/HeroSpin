import React from "react";
import {Button, ButtonProps, StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle} from "react-native";
import { globalStyles } from "../../styles/global";
import { styles } from "./style";

interface IPrimaryButtonProps{
    title:String,
    onPress?:ButtonProps["onPress"],
    style?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
}

export const PrimaryButton = (props:IPrimaryButtonProps)=>{
    return(
        <TouchableOpacity onPress={props.onPress} style={[styles.mainContainer, globalStyles.shadowEnabled, props.style]}>
            <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
}