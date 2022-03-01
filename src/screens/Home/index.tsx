import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { styles } from "../../GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home() {
  const navigation = useNavigation();

  function handleWeapons() {
    return navigation.navigate("Weapons");
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleWeapons}>
        <Text>Weapons</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
