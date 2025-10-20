import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useFonts, OpenSans_300Light } from "@expo-google-fonts/open-sans";
import Input from "../inputs/InputForms";
import Button from "../buttons/Button";

export default function FormLogin() {
  const redirectLogin = () => {
    console.log("redirecionado para calculateHours");
  };

  const [fontsLoaded] = useFonts({
    OpenSans_300Light,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Input label="User" placeholder="Digite seu email" />

      <Input
        label="Password"
        placeholder="Digite sua senha"
        secureTextEntry={true}
      />

      <Button buttonName="Entrar" submitFunction={redirectLogin} />

      <Text style={styles.textLink}>
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
  container: {
    alignItems: "center",
  },
  textLink: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },
  register: {
    color: "#00aeffff",
  },
});
