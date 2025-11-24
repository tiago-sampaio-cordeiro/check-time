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
import { useRouter } from "expo-router";
import Button from "../components/buttons/Button";
import InputTimes from "../components/inputs/InputTimes";
import InputDate from "../components/inputs/InputDate";
import TotalHours from "../components/inputs/TotalHours";
import { useTimeValidation } from "../hooks/useTimeValidation";

export default function calculateHours() {
  const [entrada, setEntrada] = useState("");
  const [saida, setSaida] = useState("");
  const [data, setData] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const router = useRouter();
  const calcular = () => {
    router.push("/listTime");
    console.log("redirecionado para tela de listagem");
  };

  const { isValid, errors, errorMessage } = useTimeValidation(
    entrada,
    saida,
    data
  );
  function handleSave() {
    setSubmitted(true);

    if (!isValid) {
      console.log(errors);
      return;
    } else {
      Alert.alert("registro salvo com sucesso!!");
    }

    // aqui logica para o pocketbase
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TimeIcon />
        <TitleApp />
        <Subtitle subtitleName="Calculo de horas" />
        <TotalHours value="00:00" />

        <View style={styles.timePair}>
          <View>
            <InputTimes
              label="Entrada"
              placeholder="--:--"
              value={entrada}
              onChange={setEntrada}
            />
          </View>
          <View>
            <InputTimes
              label="Saida"
              placeholder="--:--"
              value={saida}
              onChange={setSaida}
            />
          </View>
          <View>
            <TouchableOpacity>
              <Text>
                <Entypo name="trash" size={30} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <InputDate label="Data" value={data} onChange={setData} />

        {submitted && errorMessage && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}

        <TouchableOpacity style={styles.buttonPlus}>
          <Text>
            <Entypo name="plus" size={30} color="white" />
          </Text>
        </TouchableOpacity>
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
