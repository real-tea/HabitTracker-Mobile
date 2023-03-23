import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts , 
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from "@expo-google-fonts/inter";

//A day.ts file for tracking days of month
import './src/lib/dayjs.ts';

import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
//Routes

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  }); 

  if(!fontsLoaded){
    return(
      <Loading/>
      // <div>Fonts Loaded</div> //loading component goes here
    )
  }

  //check expo google fonts for more

  return (
    <>
    <Routes/>
    <StatusBar style="light" translucent/>
    </>
  );
}
