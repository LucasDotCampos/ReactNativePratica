import Button from "../../components/Button";
import { styles } from "../../GlobalStyles";
import { View, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [valor, setValor] = useState(0);

  function Plus() {
    setValor(valor + 1);
  }

  function Minus() {
    setValor(valor - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{valor}</Text>
      <Button title="+" onPress={Plus} />
      <Button title="-" onPress={Minus} />
    </View>
  );
}
