/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/home';
import EStyleSheet from "react-native-extended-stylesheet";
import MovieDetailsWrapper from './src/containers/movieDetails';
import MovieDetails from './src/screens/movieDetails';
import HeroSelectorScreen from './src/screens/heroSelector';


const App = () => {
  EStyleSheet.build({})
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' options={{headerShown:false}} component={HomeScreen}/>
          <Stack.Screen name='Movie Details' component={MovieDetails}/>
          <Stack.Screen name='Heros' component={HeroSelectorScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
