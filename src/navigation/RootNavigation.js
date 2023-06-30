import { StatusBar } from "react-native";
import { AppNavigation } from "./AppNavigation";
import { AuthNavigation } from "./AuthNavigation";

export function RootNavigation() {
  const auth = null;

  return (
    <>
      <StatusBar animated backgroundColor={"black"} />
      {auth ? <AppNavigation /> : <AuthNavigation />}
    </>
  );
}
