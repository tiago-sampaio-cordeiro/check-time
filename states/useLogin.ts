import { create } from "zustand";

type State = {
  user: string;
  password: string;
};

type Actions = {
  setUserState: (user: string) => void;
  setPasswordState: (password: string) => void;
};

const useLogin = create<State & Actions>()((set) => ({
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
}));

export default useLogin;
