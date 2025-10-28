import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";

interface ButtonProps extends TouchableOpacityProps {
  buttonName: string;
}

export default function Button({ buttonName, ...rest }: ButtonProps) {
  return (
    <View>
      <TouchableOpacity style={styles.button} {...rest}>
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
});
