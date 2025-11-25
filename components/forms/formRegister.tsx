import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { useFonts, OpenSans_300Light } from "@expo-google-fonts/open-sans";
import Input from "../inputs/InputForms";
import Button from "../buttons/Button";
import { pb } from "../../services/pb";
import { router } from "expo-router";

export default function FormRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não conferem.");
      return;
    }

    try {
      const newUser = await pb.collection("users").create({
        name,
        email,
        password,
        passwordConfirm: password,
      });

      console.log("Usuário cadastrado:", newUser);
      Alert.alert("Sucesso", `Conta criada para ${name}!`);
    } catch (err) {
      console.log("Erro ao cadastrar:", err);
      Alert.alert("Erro", "Não foi possível criar a conta.");
    }
  };

  const [fontsLoaded] = useFonts({
    OpenSans_300Light,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Input
        label="Name"
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

      <Input
        label="Email"
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        label="Password"
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
      />

      <Input
        label="Confirm Password"
        placeholder="Confirme sua senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Button buttonName="Cadastrar" onPress={registerUser} />

      <Text style={styles.textLink}>
        Already have an account?{" "}
        <Text style={styles.login} onPress={() => router.push("/")}>
          Login
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
  login: {
    color: "#00aeffff",
  },
});
