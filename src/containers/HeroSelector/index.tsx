import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { PrimaryButton } from "../../components/ThemedButton";
import { REQUEST_TYPES, useFetcher } from "../../hooks/fetcher.hook";
import { styles } from "./style";
import DropDownPicker from "react-native-dropdown-picker";
import SearchableDropdown from "react-native-searchable-dropdown";
import { COLORS } from "../../styles/constants";
import {emptyImage} from "../../assets/Images/index";

interface IHeroSelectorWrapperProps{
  navigation:any
}
const heros = require("../../assets/constants/superheros.json");
export default function HeroSelectorWrapper(props:IHeroSelectorWrapperProps){
    
    

    return (
      
    )
}