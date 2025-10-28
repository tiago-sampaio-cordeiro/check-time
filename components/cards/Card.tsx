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
      <View>
        <Text style={styles.titleCard}>Data: {cardTitle}</Text>
      </View>
      <View style={styles.registrosETotal}>
        <View style={styles.registrosOnly}>
          <View>
            <Text>Entrada: {horarioEntrada}</Text>
          </View>
          <View>
            <Text>Saída: {horarioSaida}</Text>
          </View>
        </View>
        <View>
          <Text>Total: {horasTotal}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    width: 350,
    backgroundColor: "#fff",
    height: 80,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  titleCard: {
    textAlign: "center",
  },
  registrosETotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  registrosOnly: {
    flexDirection: "row",
    gap: 30,
  },
});
