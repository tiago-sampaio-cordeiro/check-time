import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
}

export default function InputTimes({
  label,
  placeholder,
  value,
  onChange,
}: InputProps) {
  const removeNumber = (text: string) => {
    const onlyNumbers = text.replace(/\D/g, "");

    if (onlyNumbers.length <= 2) {
      onChange(onlyNumbers);
      return;
    }

    if (onlyNumbers.length === 3) {
      onChange(onlyNumbers);
      return;
    }

    if (onlyNumbers.length >= 4) {
      const hh = onlyNumbers.slice(0, 2);
      const mm = onlyNumbers.slice(2, 4);

      let hour = parseInt(hh, 10);
      let minute = parseInt(mm, 10);

      if (hour > 23) hour = 23;
      if (minute > 59) minute = 59;

      const formatted = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;

      onChange(formatted);
      return;
    }
  };

  return (
    <View>
      <Text style={stylesInputTimes.label}>{label}</Text>
      <TextInput
        style={stylesInputTimes.inputTime}
        placeholder={placeholder}
        keyboardType="number-pad"
        value={value}
        onChangeText={removeNumber}
        maxLength={5}
      />
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
