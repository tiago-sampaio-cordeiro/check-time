import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonProps {
  buttonName: string;
  redirect: () => void;
}

export default function Button({ buttonName, redirect }: ButtonProps) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={redirect}>
        <Text style={styles.text}>{buttonName}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 100,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  register: {
    color: "#00aeffff",
  },
});
