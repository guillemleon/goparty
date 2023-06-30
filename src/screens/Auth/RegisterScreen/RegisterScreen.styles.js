import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    height: windowHeight,
  },
  sphere: {
    height: windowWidth - 200,
    width: windowWidth - 200,
    borderRadius: windowWidth / 2,
    overflow: "hidden",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  sectionTitles: {
    width: windowWidth - 50,
    height: 50,
    flexDirection: "row",
    marginVertical: 20,
  },
  titleButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 6,
    borderBottomColor: "#000000",
  },
  titleButtonSelected: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 6,
    borderBottomColor: "#FF6827",
  },
  title: {
    color: "#FFF",
  },
});
