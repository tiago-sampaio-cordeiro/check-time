import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import React from "react";

interface InputProps extends TextInputProps {
  label: string;
  placeholder: string;
}

export default function InputForms({
  label,
  placeholder,
  ...rest
}: InputProps) {
  return (
    <View>
      <Text style={stylesInputform.label}>{label}</Text>
      <TextInput
        style={stylesInputform.input}
        placeholder={placeholder}
        {...rest}
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
