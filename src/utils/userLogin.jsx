import userSlice from "../Features/userSlice";

export const createLogin = (item) => {
  const { userLogin } = userSlice.getState();
  userLogin(item);
};
