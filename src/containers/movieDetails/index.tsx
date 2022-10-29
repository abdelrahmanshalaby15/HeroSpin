import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { PrimaryButton } from "../../components/ThemedButton";
import { REQUEST_TYPES, useFetcher } from "../../hooks/fetcher.hook";
import { styles } from "./style";
import DropDownPicker from "react-native-dropdown-picker";
import SearchableDropdown from "react-native-searchable-dropdown";
import { COLORS } from "../../styles/constants";
import {emptyImage} from "../../assets/Images/index";

interface IMovieDetailsWrapperProps{
  superhero?:string
}
const heros = require("../../assets/constants/superheros.json");
export default function MovieDetailsWrapper(props:IMovieDetailsWrapperProps){
    const {responseData, loading, fetch, error} = useFetcher<any>("http://www.omdbapi.com/", REQUEST_TYPES.GET,{
        apiKey:"1ddfd783",
        s:props.superhero?props.superhero:heros[Math.floor(Math.random()*10)],
        // page: Math.ceil(Math.random()*100),
    })
    const [recommendedMovie, setRecommendedMovie] = useState<any>();
    useEffect(()=>{
      fetch();
    },[])
    useEffect(()=>{
      responseData?setRecommendedMovie(responseData.Search.filter((item:any)=>item.Type=="movie")[Math.round(Math.random()*10)]):""
      
    },[responseData])
    useEffect(()=>{
      console.log("SSSS",recommendedMovie);      
    },[recommendedMovie])

    return (
      <ScrollView style={styles.mainContainer}>
            {loading?<ActivityIndicator style={[styles.poster]} size={"large"} color={COLORS.flame}/> : <><Image style={[styles.poster]} source={recommendedMovie?.Poster&&recommendedMovie?.Poster!="N/A"?{uri:recommendedMovie?.Poster}:emptyImage} resizeMode={"contain"}/>
            <View style={[styles.titleWrapper]}>
              <Text style={[styles.title]}>
                {recommendedMovie?.Title}
              </Text>
            </View></>}
        </ScrollView>
    )
}