import React from "react";
import HomeWrapper from "../../containers/Home";

interface IHomeScreenProps{
    navigation:any
}

export default function HomeScreen(props:IHomeScreenProps){

    return (
        <HomeWrapper navigation={props.navigation}/>
    )   
}