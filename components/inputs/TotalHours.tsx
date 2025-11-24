import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TotalHoursProps {
  value: string;
}

export default function TotalHours({ value }: TotalHoursProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total de horas</Text>
      <Text style={styles.hours}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 6,
    fontFamily: "OpenSans_300Light",
  },
  hours: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
  },
});
