import React from "react";
import HeroSelectorWrapper from "../../containers/HeroSelector";

interface IHeroSelectorScreenProps{
    navigation:any
}

export default function HeroSelectorScreen(props:IHeroSelectorScreenProps){

    return (
        <HeroSelectorWrapper navigation={props.navigation}/>
    )   
}