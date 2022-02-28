import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,24,28,1)",
    borderColor: "black",
    padding: 24,
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
    alignSelf: "center",
    margin: 5,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  picture: {
    alignSelf: "center",
    justifyContent: "center",
    height: 100,
    width: 140,
  },
  content: {
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
  border: {
    flex: 1,
    backgroundColor: "rgb(30, 40, 182)",
    borderWidth: 3,
    fontSize: 16,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    margin: 5,
    fontSize: 15,
    color: "#000",
    fontWeight: "bold",
  },
});
