import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import TimeIcon from "../components/icons/TimeIcon";
import TitleApp from "../components/title/TitleApp";
import Subtitle from "../components/subtitle/Subtitle";
import { times } from "../mocks/MockTimes";
import Card from "../components/cards/Card";
import index from ".";

export default function listTime() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TimeIcon />
        <TitleApp />
        <Subtitle subtitleName="Registros" />

        {times.map((item, index) => (
          <Card
            key={index}
            cardTitle={item.cardTitle}
            horarioEntrada={item.horarioEntrada}
            horarioSaida={item.horarioSaida}
            horasTotal={item.horasTotal}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#172A42",
    alignItems: "center",
  },
});
