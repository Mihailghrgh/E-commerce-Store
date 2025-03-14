import { create } from "zustand";
import { persist } from "zustand/middleware";

const themes = {
  garden: "garden",
  luxury: "luxury",
};

const getThemeLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.garden;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: { username: null },
  jwt: null,
  theme: getThemeLocalStorage(),
};

const userSlice = create(
  persist((set) => ({
    initialUser: initialState,
    userLogin: (item) =>
      set((state) => {
        localStorage.clear();
        const loginName = item.user.username;
        const jwtToken = item.jwt;

        return {
          initialUser: {
            ...state.initialUser,
            user: { username: loginName },
            jwt: jwtToken,
          },
        };
      }),
    userLogout: (item) =>
      set((state) => {
        localStorage.removeItem("user");
        sessionStorage.clear();
        return {
          initialUser: {
            ...state.initialUser,
            user: { username: null },
            jwt: null,
          },
        };
      }),
    toggleTheme: () =>
      set((state) => {
        const { garden, luxury } = themes;
        const newTheme = state.initialUser.theme === garden ? luxury : garden;

        document.documentElement.setAttribute("data-theme", newTheme);

        localStorage.setItem("theme", newTheme);
        return { initialUser: { ...state.initialUser, theme: newTheme } };
      }),
  }))
);

export default userSlice;
