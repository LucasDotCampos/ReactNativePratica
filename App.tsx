import React from "react";
import Weapons from "./src/screens/Weapons";
import Loading from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [loadedFont] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!loadedFont) {
    return <Loading />;
  }
  return <Weapons />;
}
