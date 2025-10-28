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
import Subtitle from "../components/subtitle/Subtitle";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import Button from "../components/buttons/Button";
import InputTimes from "../components/inputs/InputTimes";

export default function calculateHours() {
  const router = useRouter();
  const calcular = () => {
    router.push("/listTime");
    console.log("redirecionado para tela de listagem");
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TimeIcon />
        <TitleApp />
        <Subtitle subtitleName="Calculo de horas" />
        <View style={styles.timePair}>
          <View>
            <InputTimes label="Entrada" placeholder="--:--" />
          </View>
          <View>
            <InputTimes label="Saida" placeholder="--:--" />
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
        <Button buttonName="Calcular" onPress={calcular} />
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
});
