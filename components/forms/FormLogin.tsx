import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useFonts, OpenSans_300Light } from "@expo-google-fonts/open-sans";
import Input from "../inputs/Input";

export default function FormLogin() {
  const [fontsLoaded] = useFonts({
    OpenSans_300Light,
  });

  if (!fontsLoaded) return null;

  return (
    <View>
      <Input label="User" placeholder="Digite seu email" />

      <Input
        label="Password"
        placeholder="Digite sua senha"
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("botao clicado")}
      >
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        You don't have an account?{" "}
        <Text
          style={styles.register}
          onPress={() => console.log("direcionando para tela de cadastro")}
        >
          Register
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 350,
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
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 120,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  register: {
    color: "#00aeffff",
  },
});
