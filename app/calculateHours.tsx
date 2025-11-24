import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import TimeIcon from "../components/icons/TimeIcon";
import TitleApp from "../components/title/TitleApp";
import Subtitle from "../components/subtitle/Subtitle";
import Entypo from "@expo/vector-icons/Entypo";
import Button from "../components/buttons/Button";
import InputTimes from "../components/inputs/InputTimes";
import InputDate from "../components/inputs/InputDate";
import TotalHours from "../components/inputs/TotalHours";
import { useTimeValidation } from "../hooks/useTimeValidation";

type TimePair = {
  id: number;
  entrada: string;
  saida: string;
};

function calcularTotalHoras(pares: TimePair[]): string {
  let totalMinutos = 0;

  for (const p of pares) {
    if (!p.entrada || !p.saida) continue;

    const [hIn, mIn] = p.entrada.split(":").map(Number);
    const [hOut, mOut] = p.saida.split(":").map(Number);

    const entradaMin = hIn * 60 + mIn;
    const saidaMin = hOut * 60 + mOut;

    if (saidaMin > entradaMin) {
      totalMinutos += saidaMin - entradaMin;
    }
  }

  const horas = String(Math.floor(totalMinutos / 60)).padStart(2, "0");
  const minutos = String(totalMinutos % 60).padStart(2, "0");

  return `${horas}:${minutos}`;
}

export default function calculateHours() {
  const [timePairs, setTimePairs] = useState([
    { id: Date.now(), entrada: "", saida: "" },
  ]);
  const [data, setData] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function addTimePair() {
    setTimePairs((prev) => [
      ...prev,
      { id: Date.now(), entrada: "", saida: "" },
    ]);
  }

  function removeTimePair(id: number) {
    if (timePairs.length === 1) {
      Alert.alert(
        "Operação não permitida",
        "Você precisa ter pelo menos um par."
      );
      return;
    }

    setTimePairs((prev) => prev.filter((item) => item.id !== id));
  }

  function updateTimePair(
    id: number,
    field: "entrada" | "saida",
    value: string
  ) {
    setTimePairs((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  }

  const { isValid, errors, errorMessage } = useTimeValidation(timePairs, data);

  function handleSave() {
    setSubmitted(true);

    if (!isValid) {
      console.log(errors);
      return;
    }

    const total = calcularTotalHoras(timePairs);
    Alert.alert("Total de horas", `Você trabalhou ${total}`);

    // futura integração PocketBase
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TimeIcon />
        <TitleApp />
        <Subtitle subtitleName="Calculo de horas" />
        <TotalHours value={calcularTotalHoras(timePairs)} />

        {timePairs.map((pair) => (
          <View key={pair.id} style={styles.timePair}>
            <InputTimes
              label="Entrada"
              placeholder="--:--"
              value={pair.entrada}
              onChange={(v) => updateTimePair(pair.id, "entrada", v)}
            />

            <InputTimes
              label="Saída"
              placeholder="--:--"
              value={pair.saida}
              onChange={(v) => updateTimePair(pair.id, "saida", v)}
            />

            <TouchableOpacity onPress={() => removeTimePair(pair.id)}>
              <Entypo name="trash" size={30} color="white" />
            </TouchableOpacity>
          </View>
        ))}

        {submitted && errorMessage && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}

        {/* Botão adicionar */}
        <TouchableOpacity style={styles.buttonPlus} onPress={addTimePair}>
          <Entypo name="plus" size={30} color="white" />
        </TouchableOpacity>
        <InputDate label="Data" value={data} onChange={setData} />

        <Button buttonName="Calcular" onPress={handleSave} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#172A42",
    alignItems: "center",
  },
  timePair: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#12364F",
    padding: 15,
    borderRadius: 20,
    width: 350,
  },
  buttonPlus: {
    backgroundColor: "#38BC24",
    marginTop: 20,
    width: 300,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
  },
});
