import { create } from "zustand";
import { toast } from "react-toastify";
import { persist } from "zustand/middleware";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const useStore = create(
  persist((set) => ({
    cart: defaultState,
    addItem: (item) =>
      set((state) => {
        ////checking existing Item
        const existingItem = state.cart.cartItems?.find(
          (cartItem) => cartItem.cartId === item.cartId
        );

        let newCartItems;

        if (existingItem) {
          newCartItems = state.cart.cartItems.map((cartItem) =>
            cartItem.cartId === item.cartId
              ? { ...cartItem, amount: cartItem.amount + item.amount }
              : cartItem
          );
        } else {
          newCartItems = [...state.cart.cartItems, item];
        }

        const newCartTotal = newCartItems.reduce(
          (total, cartItem) => total + cartItem.price * cartItem.amount,
          0
        );

        toast.success("Item added to cart");

        return {
          cart: {
            ...state.cart,
            cartItems: newCartItems,
            numItemsInCart: state.cart.numItemsInCart + 1,
            cartTotal: newCartTotal,
          },
        };
      }),
    clearCart: () =>
      set((state) => {
        const updatedCart = defaultState;
        return { cart: { ...updatedCart } };
      }),
    removeItem: (item) =>
      set((state) => {
        const itemId = item.cartId;

        const existingItem = state.cart.cartItems.find(
          (cartItem) => cartItem.cartId === itemId
        );

        const newCart = state.cart.cartItems.filter(
          (item) => item.cartId !== itemId
        );

        const newCartTotal = newCart.reduce(
          (total, cartItem) => total + cartItem.price * cartItem.amount,
          0
        );

        if (existingItem) toast.error("Item successfully removed from Cart");

        ////Failsafe incase the existingItem is not existing in the Array
        return {
          cart: {
            ...state.cart,
            cartItems: newCart,
            numItemsInCart: existingItem
              ? state.cart.numItemsInCart - 1
              : state.cart.numItemsInCart,
            cartTotal: newCartTotal,
          },
        };
      }),
    editItem: ({ item, amount }) =>
      set((state) => {
        const newCartItem = state.cart.cartItems.map((cartItem) => {
          if (cartItem?.cartId === item.cartId) {
            return { ...cartItem, amount };
          }

          return cartItem;
        });

        toast.success("Item edited successfully");

        return {
          cart: {
            ...state.cart,
            cartItems: newCartItem,
          },
        };
      }),
  }))
);

export default useStore;
