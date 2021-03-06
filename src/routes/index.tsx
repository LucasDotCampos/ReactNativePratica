import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { RoutesStack } from "./stack.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <RoutesStack />
    </NavigationContainer>
  );
}
