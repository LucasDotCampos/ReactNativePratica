import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "../../GlobalStyles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: fonts.roboto700,
    margin: 5,
    fontSize: 20,
    color: "#fff",
  },
  textView: {
    alignItems: "center",
    position: "absolute",
    display: "flex",
    justifyContent: "space-around",
    padding: 16,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
  },
});
