import React from "react";
import { SafeAreaView, Text } from "react-native";
import HomeWrapper from "../../containers/Home";

interface IHomeScreenProps{
    navigation:any
}

export default function HomeScreen(props:IHomeScreenProps){

    console.log("Nav", props.navigation)
    return (
        <HomeWrapper navigation={props.navigation}/>
    )   
}