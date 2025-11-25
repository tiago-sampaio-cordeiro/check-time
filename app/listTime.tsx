import { View, StyleSheet, ScrollView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import TimeIcon from "../components/icons/TimeIcon";
import TitleApp from "../components/title/TitleApp";
import Subtitle from "../components/subtitle/Subtitle";
import Card, { CardProps } from "../components/cards/Card";
import { pb } from "../services/pb";
import { useFocusEffect } from "expo-router";

interface Registro {
  id: string;
  data: string;
  entrada: string;
  saida: string;
  total: string;
}

export default function listTime() {
  const [registros, setRegistros] = useState<Registro[]>([]);

  const formatDateBR = (dateString: string) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const loadRegistros = async () => {
    try {
      const data = await pb.collection("horas").getFullList({
        filter: `user = "${pb.authStore.model?.id}"`,
      });
      const registrosFormatados: Registro[] = data.map((r) => ({
        id: r.id,
        data: r.data.split("-").reverse().join("/"),
        entrada: r.entrada,
        saida: r.saida,
        total: r.total,
      }));

      setRegistros(registrosFormatados);
    } catch (error) {
      console.log("Erro ao buscar registros:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadRegistros();
    }, [])
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#172A42" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <TimeIcon />
          <TitleApp />
          <Subtitle subtitleName="Registros" />

          {registros.map((r) => {
            const cardProps: CardProps = {
              cardTitle: r.data,
              horarioEntrada: r.entrada,
              horarioSaida: r.saida,
              horasTotal: r.total,
            };
            return <Card key={r.id} {...cardProps} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#172A42",
    alignItems: "center",
  },
});
