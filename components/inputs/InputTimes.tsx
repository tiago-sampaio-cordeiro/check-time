import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
}

export default function InputTimes({ label, placeholder }: InputProps) {
  return (
    <View>
      <Text style={stylesInputTimes.label}>{label}</Text>
      <TextInput style={stylesInputTimes.inputTime} placeholder={placeholder} />
    </View>
  );
}

const stylesInputTimes = StyleSheet.create({
  inputTime: {
    width: 130,
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
