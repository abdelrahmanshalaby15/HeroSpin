import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";
import { PrimaryButton } from "../../components/ThemedButton";
import { REQUEST_TYPES, useFetcher } from "../../hooks/fetcher.hook";
import { styles } from "./style";
import DropDownPicker from "react-native-dropdown-picker";
import SearchableDropdown from "react-native-searchable-dropdown";
import { COLORS } from "../../styles/constants";

interface IHomeWrapperProps{
    navigation:any,
}
const heros = require("../../assets/constants/superheros.json");
export default function HomeWrapper(props:IHomeWrapperProps){
    const {responseData, loading, fetch, error} = useFetcher("http://www.omdbapi.com/", REQUEST_TYPES.GET,{
        apiKey:"1ddfd783",
        s:"Marvel",
        // page: Math.ceil(Math.random()*100),
    })
    // const [heroMap, setHeroMap] = useState<{value:string, label:string}[]>(heros.map((hero:string)=>({value:hero, label:hero})))
    const [heroMap, setHeroMap] = useState<{id:string, name:string}[]>(heros.map((hero:string)=>({id:hero, name:hero})))
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    useEffect(()=>{
        console.log("RP-1", responseData, error);
        console.log("HP-1", heroMap);
    },[responseData, heroMap])
    return (
        <View style={styles.mainContainer}>
        <PrimaryButton title={"Random Movie"} onPress={()=>props.navigation.navigate("Movie Details")}/>
        {/* <DropDownPicker
            open={open}
            setOpen={setOpen}
            value={value}
            setValue={setValue}
            items={heroMap}
            setItems={setHeroMap}
        /> */}
        <SearchableDropdown
            items={heroMap}
            onItemSelect={(item:any) => {
                Alert.alert(item.name)
              }}
              itemStyle={{
                padding: 10,
                marginTop: 2,
                // backgroundColor: COLORS.light_gray,
                borderColor: '#bbb',
                borderBottomWidth: 1,
                borderRadius: 5,
              }}
              itemTextStyle={{ color: '#222' }}
              itemsContainerStyle={{ maxHeight: 140 }}
              textInputProps={
                {
                  placeholder: "placeholder",
                  underlineColorAndroid: "transparent",
                  style: {
                      padding: 12,
                      borderWidth: 1,
                      borderColor: '#ccc',
                      borderRadius: 5,
                  },
                  onTextChange: (text:any) =>{}
                }
              }
        />
            
        </View>
    )
}