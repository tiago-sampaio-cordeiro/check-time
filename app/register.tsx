import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import TitleApp from "../components/title/TitleApp";
import TimeIcon from "../components/icons/TimeIcon";
import Subtitle from "../components/subtitle/Subtitle";
import FormRegister from "../components/forms/formRegister";

export default function index() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TimeIcon />
        <TitleApp />
        <Subtitle subtitleName="Cadastro" />
        <FormRegister />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#172A42",
    alignItems: "center",
  },
});
