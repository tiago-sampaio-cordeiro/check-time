import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import TimeIcon from "../components/icons/TimeIcon";
import TitleApp from "../components/title/TitleApp";
import Input from "../components/inputs/Input";
import Subtitle from "../components/subtitle/Subtitle";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";

export default function calculateHours() {
  const router = useRouter();
  const calcular = () => {
    router.push("/listTime");
    console.log("redirecionado para tela de listagem");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <TimeIcon />
        <TitleApp />
        <Subtitle subtitleName="Calculo de horas" />
        <View style={styles.timePair}>
          <View>
            <Input
              labelStyle={styles.label}
              inputStyle={styles.inputTime}
              label="Entrada"
              placeholder="--:--"
            />
          </View>
          <View>
            <Input
              labelStyle={styles.label}
              inputStyle={styles.inputTime}
              label="Saida"
              placeholder="--:--"
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
        <TouchableOpacity style={styles.buttonPlus}>
          <Text>
            <Entypo name="plus" size={30} color="white" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCalculate} onPress={calcular}>
          <Text style={styles.text}>Calcular</Text>
        </TouchableOpacity>
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
  timePair: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#12364F",
    padding: 15,
    borderRadius: 20,
  },
  inputTime: {
    width: 120,
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
  buttonPlus: {
    backgroundColor: "#38BC24",
    marginTop: 20,
    width: 300,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCalculate: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 100,
    marginBottom: 120,
    width: 300,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
