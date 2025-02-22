import userSlice from "../Features/userSlice";
import { toast } from "react-toastify";

export const createLogin = (item) => {
  const { userLogin } = userSlice.getState();
  userLogin(item);
};

export const checkLogin = () => {
  const { initialUser } = userSlice.getState();

  return initialUser;
};
