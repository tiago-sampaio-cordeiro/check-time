import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  email: string;
  password: string;
};

type Actions = {
  setUserState: (email: string) => void;
  setPasswordState: (password: string) => void;
};

const useLogin = create<State & Actions>()(
  persist(
    (set) => ({
      email: "",
      password: "",
      setUserState: (email) =>
        set(() => ({
          email,
        })),
      setPasswordState: (password) =>
        set(() => ({
          password,
        })),
    }),
    { name: "state-useLogin", storage: createJSONStorage(() => AsyncStorage) }
  )
);

export default useLogin;
