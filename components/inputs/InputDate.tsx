import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface DateInputProps {
  label: string;
  value: string;
  onChange: (date: string) => void;
}

export default function DateInput({ label, value, onChange }: DateInputProps) {
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (_: any, selected?: Date) => {
    setShowPicker(false);

    if (!selected) return;

    const iso = selected.toISOString().split("T")[0];
    onChange(iso);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity
        onPress={() => setShowPicker(true)}
        style={styles.inputBox}
      >
        <Text style={styles.inputText}>{value || "Selecione uma data"}</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={value ? new Date(value) : new Date()}
          mode="date"
          display="spinner"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 25 },
  label: {
    color: "#fff",
    fontSize: 20,
    marginTop: 40,
    fontFamily: "OpenSans_300Light",
  },
  inputBox: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  inputText: {
    fontSize: 18,
    color: "#444",
  },
});
