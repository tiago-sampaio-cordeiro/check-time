import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

export default function InputForms({
  label,
  placeholder,
  secureTextEntry,
}: InputProps) {
  return (
    <View>
      <Text style={stylesInputform.label}>{label}</Text>
      <TextInput
        style={stylesInputform.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const stylesInputform = StyleSheet.create({
  input: {
    width: 350,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    fontSize: 20,
    textAlign: "left",
    fontFamily: "OpenSans_300Light",
  },
});
