import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function TimeIcon() {
  return (
    <View>
      <Text style={styles.icon}>
        <MaterialIcons name="access-time" size={80} color="" />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 200,
    marginBottom: 10,
    color: "#A6E6F0",
  },
});
