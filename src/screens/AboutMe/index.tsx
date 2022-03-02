import React from "react";
import { Text, Image, View, Linking } from "react-native";
import { styles } from "../../GlobalStyles";

export function AboutMe() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: "https://github.com/lucasdotcampos.png" }}
      />

      <View style={styles.socialContainer}>
        <Text style={styles.content}>Lucas Rodrigues Campos</Text>
        <Text
          style={styles.socialText}
          onPress={() => {
            Linking.openURL("https://github.com/lucasdotcampos");
          }}
        >
          Github
        </Text>

        <Text
          style={styles.socialText}
          onPress={() => {
            Linking.openURL("https://www.linkedin.com/in/lucascamposhs/");
          }}
        >
          LinkedIn
        </Text>
      </View>
    </View>
  );
}
