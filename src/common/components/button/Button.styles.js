import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const genericStyles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#000000",
    display: "flex",
    alignItems: "center",
  },
  fireButton: {
    ...genericStyles.button,
    width: windowWidth - 50,
    height: 50,
  },
  waterButton: {
    ...genericStyles.button,
    width: windowWidth - 50,
    height: 50,
  },
  voidButton: {
    ...genericStyles.button,
    width: windowWidth - 50,
    height: 50,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFF",
  },
  buttonText: {
    color: "#FFF",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
