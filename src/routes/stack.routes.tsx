import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Weapons from "../screens/Weapons";

const { Navigator, Screen } = createStackNavigator();

export function RoutesStack() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Weapons" component={Weapons} />
    </Navigator>
  );
}
