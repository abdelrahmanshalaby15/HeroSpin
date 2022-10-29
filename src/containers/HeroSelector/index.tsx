import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { PrimaryButton } from "../../components/ThemedButton";
import { REQUEST_TYPES, useFetcher } from "../../hooks/fetcher.hook";
import { styles } from "./style";
import DropDownPicker from "react-native-dropdown-picker";
import SearchableDropdown from "react-native-searchable-dropdown";
import { COLORS } from "../../styles/constants";
import {emptyImage} from "../../assets/Images/index";
import { globalStyles } from "../../styles/global";

interface IHeroSelectorWrapperProps{
  navigation:any
}
const heros = require("../../assets/constants/heroOptions.json");
export default function HeroSelectorWrapper(props:IHeroSelectorWrapperProps){
    
    
    const renderItem = ({item}:any)=>{
      return (
      <TouchableOpacity style={[styles.heroCard, globalStyles.shadowEnabled]} onPress={()=>props.navigation.navigate("Movie Details", {
        superhero:item.name
      })}>
        <Image style={[styles.cardImage]} source={{uri:item.image}}/>
        <Text style={[styles.heroName]}>{item.name}</Text>
      </TouchableOpacity>
      )
    }
    return (
      <SafeAreaView>
        <View style={[styles.mainContainer]}>
          <FlatList
            style={[styles.list]}
            data={heros}
            renderItem={renderItem}
            numColumns={2}
            horizontal={false}

          />
        </View>
      </SafeAreaView>
    )
}