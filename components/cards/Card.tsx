import { View, Text, StyleSheet } from "react-native";
import React from "react";

export interface CardProps {
  cardTitle: string;
  horarioEntrada: string;
  horarioSaida: string;
  horasTotal: string;
}

export default function Card({
  cardTitle,
  horarioEntrada,
  horarioSaida,
  horasTotal,
}: CardProps) {
  return (
    <View style={styles.containerCard}>
      <Text style={styles.titleCard}>{cardTitle}</Text>

      <View style={styles.registrosETotal}>
        <View style={styles.registrosOnly}>
          <View style={styles.timeBlock}>
            <Text style={styles.label}>Entrada</Text>
            <Text style={styles.value}>{horarioEntrada}</Text>
          </View>
          <View style={styles.timeBlock}>
            <Text style={styles.label}>Saída</Text>
            <Text style={styles.value}>{horarioSaida}</Text>
          </View>
        </View>

        <View style={styles.totalBlock}>
          <Text style={styles.label}>Total</Text>
          <Text style={styles.value}>{horasTotal}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    width: 350,
    backgroundColor: "#2847afff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  titleCard: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 12,
  },
  registrosETotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  registrosOnly: {
    flexDirection: "row",
    gap: 25,
  },
  timeBlock: {
    alignItems: "center",
  },
  totalBlock: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "#A0B0D0",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
