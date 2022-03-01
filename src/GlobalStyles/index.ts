import { StyleSheet } from "react-native";
import { fonts } from "./fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,24,28,1)",
    borderColor: "black",
    padding: 20,
    paddingTop: 30,
  },

  button: {
    backgroundColor: "#fff",
    width: 80,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    margin: 5,
    fontSize: 20,
  },
  title: {
    fontFamily: fonts.roboto700,
    alignSelf: "center",
    margin: 5,
    fontSize: 20,
    color: "#fff",
  },
  picture: {
    alignSelf: "center",
    justifyContent: "center",
    height: 100,
    width: 140,
  },
  content: {
    fontFamily: fonts.roboto700,
    margin: 5,
    fontSize: 15,
    color: "#fff",
    justifyContent: "space-between",
  },
  fieldContainer: {
    fontSize: 5,
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderWidth: 2,
    fontSize: 16,
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  name: {
    fontFamily: fonts.roboto700,
    margin: 5,
    fontSize: 15,
    color: "#fff",
  },
});
