import React from "react";
import { SafeAreaView, Text } from "react-native";
import HomeWrapper from "../../containers/Home";
import MovieDetailsWrapper from "../../containers/movieDetails";

interface IHeroSelectorScreenProps{
    navigation:any
}

export default function HeroSelectorScreen(props:IHeroSelectorScreenProps){

    return (
        <HeroSelectorWrapper navigation={props.navigation}/>
    )   
}