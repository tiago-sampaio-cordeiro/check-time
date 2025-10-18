import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TitleApp from "../components/title/TitleApp";
import TimeIcon from "../components/icons/TimeIcon";
import FormLogin from "../components/forms/FormLogin";
import Subtitle from "../components/subtitle/Subtitle";

export default function App() {
  return (
    <View style={styles.container}>
      <TimeIcon />
      <TitleApp />
      <Subtitle subtitleName="Login" />
      <FormLogin />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#172A42",
    alignItems: "center",
  },
});
