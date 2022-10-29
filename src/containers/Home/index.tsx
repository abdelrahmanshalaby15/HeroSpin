import React, { useEffect, useState } from "react";
import { Alert, Image, SafeAreaView, Text, View } from "react-native";
import { PrimaryButton } from "../../components/ThemedButton";
import { styles } from "./style";
import {logo} from "../../assets/Images";


interface IHomeWrapperProps{
    navigation:any,
}
const heros = require("../../assets/constants/superheros.json");
export default function HomeWrapper(props:IHomeWrapperProps){
    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <Image source={logo} style={styles.logo} resizeMode={"contain"}/>
                <View style={[styles.buttonsContainer]}>
                    <PrimaryButton title={"Random Movie"} onPress={()=>props.navigation.navigate("Movie Details")}/>
                    <PrimaryButton title={"Select Hero"} onPress={()=>props.navigation.navigate("Heros")}/>
                </View>
            </View>
        </SafeAreaView>
    )
}