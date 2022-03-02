import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import Background from "../../assets/Logo.png";

export default function Home() {
  const navigation = useNavigation();

  function handleWeapons() {
    return navigation.navigate("Weapons");
  }

  function handleAboutMe() {
    return navigation.navigate("AboutMe");
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background} style={styles.image}>
        <View style={styles.textView}>
          <TouchableOpacity style={styles.title} onPress={handleWeapons}>
            <Text style={styles.title}>Weapons</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.title} onPress={handleAboutMe}>
            <Text style={styles.title}>About Me</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
