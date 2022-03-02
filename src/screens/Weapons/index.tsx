import React, { useEffect } from "react";
import { useState } from "react";
import { View, FlatList, Text, Image } from "react-native";
import { styles } from "../../GlobalStyles";
import { api } from "../../services/api";
import AppLoading from "expo-app-loading";

interface Weapons {
  id: string;
  name: string;
  ammo: string;
  killAward: string;
  damage: number;
  firerate: number;
  recoilControl: number;
  accurateRange: string;
  armorPenetration: number;
  type: string;
  side: string;
  price: string;
  picture: string;
}
export default function Weapons() {
  const [weapons, setWeapons] = useState<Weapons[]>([]);

  async function loadWeapons() {
    const response = await api.get("/");
    setWeapons(response.data);
  }

  useEffect(() => {
    loadWeapons();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList<Weapons>
        showsVerticalScrollIndicator={false}
        data={weapons}
        keyExtractor={(weapons) => weapons.id}
        initialNumToRender={1}
        maxToRenderPerBatch={5}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.card}>
                <Text style={styles.title}>{item.name}</Text>

                <Image style={styles.picture} source={{ uri: item.picture }} />

                <View style={styles.fieldContainer}>
                  <Text style={styles.name}>Ammo</Text>
                  <Text style={styles.content}>{item.ammo}</Text>
                </View>

                <View style={styles.fieldContainer}>
                  <Text style={styles.name}>Kill award</Text>
                  <Text style={styles.content}>{item.killAward}</Text>
                </View>

                <View style={styles.fieldContainer}>
                  <Text style={styles.name}>Accurate Range</Text>
                  <Text style={styles.content}>{item.accurateRange}</Text>
                </View>

                <View style={styles.fieldContainer}>
                  <Text style={styles.name}>Armor Penetration</Text>
                  <Text style={styles.content}>{item.armorPenetration}</Text>
                </View>

                <View style={styles.fieldContainer}>
                  <Text style={styles.name}>Damage</Text>
                  <Text style={styles.content}>{item.damage}</Text>
                </View>

                <View style={styles.fieldContainer}>
                  <Text style={styles.name}>Firerate</Text>
                  <Text style={styles.content}>{item.firerate}</Text>
                </View>

                <View style={styles.fieldContainer}>
                  <Text style={styles.name}>Recoil Control</Text>
                  <Text style={styles.content}>{item.recoilControl}</Text>
                </View>

                <View style={styles.fieldContainer}>
                  <Text style={styles.name}>Side</Text>
                  <Text style={styles.content}>{item.side.toLowerCase()}</Text>
                </View>

                <View style={styles.fieldContainer}>
                  <Text style={styles.name}>Type</Text>
                  <Text style={styles.content}>{item.type.toLowerCase()}</Text>
                </View>

                <View style={styles.fieldContainer}>
                  <Text style={styles.name}>Price</Text>
                  <Text style={styles.content}>{item.price}</Text>
                </View>
              </View>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
}
