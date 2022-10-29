import React from "react";
import { SafeAreaView, Text } from "react-native";
import HomeWrapper from "../../containers/Home";
import MovieDetailsWrapper from "../../containers/movieDetails";

interface IHomeScreenProps{
    navigation:any,
    route:any,
}

export default function MovieDetails(props:IHomeScreenProps){
    return (
        <MovieDetailsWrapper superhero={props.route?.params?.superhero}/>
    )   
}