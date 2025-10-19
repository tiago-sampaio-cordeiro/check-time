import { View, Text, TextInput, StyleSheet, TextStyle } from "react-native";
import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
}

export default function Input({
  label,
  placeholder,
  secureTextEntry,
  labelStyle,
  inputStyle,
}: InputProps) {
  return (
    <View>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
