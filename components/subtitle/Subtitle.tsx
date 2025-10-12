import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";

interface SubtitleProps {
  subtitleName: string;
}

export default function Subtitle({ subtitleName }: SubtitleProps) {
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_500Medium,
  });
  if (!fontsLoaded) return null;
  return (
    <View>
      <Text style={styles.subtitle}>{subtitleName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 35,
    color: "#cdcde6ff",
    fontFamily: "Montserrat_500Medium",
    marginBottom: 30,
  },
});
