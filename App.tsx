import React from "react";
import AppLoading from "expo-app-loading";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Inter_700Bold, Inter_500Medium } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Routes />;
}
