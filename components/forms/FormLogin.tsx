import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts, OpenSans_300Light } from "@expo-google-fonts/open-sans";
import Input from "../inputs/Input";
import { useNavigation, useRouter } from "expo-router";

export default function FormLogin() {
  const router = useRouter();
  const redirectLogin = () => {
    router.push("/calculateHours");
    console.log("redirecionado para calculateHours");
  };

  const [fontsLoaded] = useFonts({
    OpenSans_300Light,
  });

  if (!fontsLoaded) return null;

  return (
    <View>
      <Input
        labelStyle={styles.label}
        inputStyle={styles.input}
        label="User"
        placeholder="Digite seu email"
      />

      <Input
        labelStyle={styles.label}
        inputStyle={styles.input}
        label="Password"
        placeholder="Digite sua senha"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={redirectLogin}>
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
