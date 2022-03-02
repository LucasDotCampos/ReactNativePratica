import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Weapons from "../screens/Weapons";
import { AboutMe } from "../screens/AboutMe";

const { Navigator, Screen } = createStackNavigator();

export function RoutesStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Weapons" component={Weapons} />
      <Screen name="AboutMe" component={AboutMe} />
    </Navigator>
  );
}
