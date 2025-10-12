import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useFonts, OpenSans_300Light } from "@expo-google-fonts/open-sans";

export default function FormLogin() {
  const [fontsLoaded] = useFonts({
    OpenSans_300Light,
  });

  if (!fontsLoaded) return null;

  return (
    <View>
      <Text style={styles.label}>User</Text>
      <TextInput style={styles.input} placeholder="Digite seu email" />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
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
        You don't hava an account?{" "}
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
