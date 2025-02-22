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
  user: { username: "Mihail" },
  theme: getThemeLocalStorage(),
};

const userSlice = create(
  persist((set) => ({
    initialUser: initialState,
    userLogin: (item) =>
      set((state) => {
        const loginName = item.user.username;

        return {
          initialUser: { ...state.initialUser, user: { username: loginName } },
        };
      }),
    userLogout: (item) =>
      set((state) => {
        console.log("logout");

        let localUser = state.initialUser.user.username;
        localUser = null;
        localStorage.removeItem("user");

        return {
          initialUser: { ...state.initialUser, user: { username: localUser } },
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
