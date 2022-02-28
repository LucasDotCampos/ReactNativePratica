import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "../../GlobalStyles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}
export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
