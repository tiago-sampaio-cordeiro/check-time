import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TitleApp from "./components/title/TitleApp";
import TimeIcon from "./components/icons/TimeIcon";

export default function App() {
  return (
    <View style={styles.container}>
      <TimeIcon />
      <TitleApp />
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
