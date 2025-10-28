import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  user: string;
  password: string;
};

type Actions = {
  setUserState: (user: string) => void;
  setPasswordState: (password: string) => void;
};

const useLogin = create<State & Actions>()(
  persist(
    (set) => ({
      user: "",
      password: "",
      setUserState: (user) =>
        set(() => ({
          user,
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
