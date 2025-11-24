import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface InputDateProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
}

export default function InputDate({ label, value, onChange }: InputDateProps) {
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (_: any, selectedDate?: Date) => {
    setShowPicker(false);

    if (!selectedDate) return;

    const day = selectedDate.getDate().toString().padStart(2, "0");
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
    const year = selectedDate.getFullYear();

    onChange(`${day}/${month}/${year}`);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity onPress={() => setShowPicker(true)}>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          value={value}
          editable={false} // evita abrir teclado
        />
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 10,
    marginBottom: 20,
    height: 45,
    fontSize: 18,
  },
  label: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "OpenSans_300Light",
  },
});
