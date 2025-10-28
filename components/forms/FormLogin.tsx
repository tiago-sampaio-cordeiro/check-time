import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useFonts, OpenSans_300Light } from "@expo-google-fonts/open-sans";
import Input from "../inputs/InputForms";
import Button from "../buttons/Button";
import useLogin from "../../states/useLogin";

export default function FormLogin() {
  const { user, password, setUserState, setPasswordState } = useLogin();

  const userData = () => {
    let data = JSON.stringify({ user, password });

    console.log(data);
  };

  const [fontsLoaded] = useFonts({
    OpenSans_300Light,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Input
        label="User"
        placeholder="Digite seu email"
        value={user}
        onChangeText={setUserState}
      />

      <Input
        label="Password"
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPasswordState}
      />

      <Button buttonName="Entrar" onPress={userData} />

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
