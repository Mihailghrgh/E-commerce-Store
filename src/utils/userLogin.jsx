import userSlice from "../Features/userSlice";
import useStore from "../Features/cartSlice";


export const createLogin = (item) => {
  const { userLogin } = userSlice.getState();
  userLogin(item);
};

export const userCart = () => {
  const { cart } = useStore.getState();
  return cart;
};

export const checkLogin = () => {
  const { initialUser } = userSlice.getState();

  return initialUser;
};

export const cartClear = () => {
  const { clearCart } = useStore.getState();
  clearCart();
};
