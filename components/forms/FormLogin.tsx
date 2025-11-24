import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import { useFonts, OpenSans_300Light } from "@expo-google-fonts/open-sans";
import Input from "../inputs/InputForms";
import Button from "../buttons/Button";
import useLogin from "../../states/useLogin";
import { pb } from "../../services/pb";

export default function FormLogin() {
  const { email, password, setUserState, setPasswordState } = useLogin();

  const userData = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha usuário e senha.");
      return;
    }

    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);

      console.log("Usuário logado:", authData);

      Alert.alert("Sucesso", `Bem-vindo, ${authData.record.name || email}!`);
    } catch (err) {
      console.log("Erro ao logar:", err);
      Alert.alert("Erro", "Usuário ou senha incorretos.");
    }
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
        value={email}
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
