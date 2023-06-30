import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    height: windowHeight,
  },
  sphere: {
    height: windowWidth,
    width: windowWidth,
    borderRadius: windowWidth / 2,
    transform: [{ scale: 1.5 }, { translateY: -80 }],
    overflow: "hidden",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    top: windowWidth / 3,
  },
  content: {
    height: windowHeight,
    transform: [{ translateY: -windowWidth / 2 }],
    alignItems: "center",
    paddingBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  input: {
    width: windowWidth - 50,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  forgotPasswordButton: {
    width: windowWidth - 50,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  forgotPasswordButtonText: {
    color: "#FFF",
  },
  keyboardAvoidingView: {
    height: 50,
    width: windowWidth - 50,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  line: {
    width: windowWidth / 2 - 100,
    height: 1,
    backgroundColor: "#FFF",
  },
  oAuthButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  oAuthButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10,
    backgroundColor: "#FFF",
  },
  oAuthLogo: {
    width: 50,
    height: 50,
  },
});
