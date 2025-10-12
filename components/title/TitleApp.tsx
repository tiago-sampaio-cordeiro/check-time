import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_600SemiBold,
} from "@expo-google-fonts/roboto";

export default function TitleApp() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_600SemiBold,
  });

  if (!fontsLoaded) return null;
  return (
    <View>
      <Text style={styles.title}>Check time</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: "Roboto_600SemiBold",
    marginBottom: 300,
    color: "#A6E6F0",
  },
});
