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
        const existingItem = state.cart.cartItems.find(
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
        toast.success("All items removed from Cart");
        return { cart: { ...updatedCart } };
      }),
    removeItem: (item) =>
      set((state) => {
        const itemId = item;
        const id = state.cart.cartItems.find(
          (item) => item.cartId === itemId.cartId
        );

        if (id) {
          const newCart = state.cart.cartItems.filter(
            (item) => item.cartId !== itemId
          );
          toast.success("Item successfully removed from Cart");
          return {
            cart: {
              ...state.cart,
              cartItems: [...newCart],
              numItemsInCart: state.cart.numItemsInCart - 1,
              cartTotal: state.cart.cartTotal - item.price,
            },
          };
        }
      }),
    editItem: ({ item, color, amount }) =>
      set((state) => {
        toast.success("Item edited successfully");
        return {
          cart: {
            ...state.cart,
            numItemsInCart: (state.cart.numItemsInCart += amount - item.amount),
            cartTotal: (state.cart.cartTotal +=
              item.price * (amount - item.amount)),
            cartItems: state.cart.cartItems.map((cartItem) => {
              cartItem.cartId === item.cartId
                ? {
                    ...cartItem,
                    color,
                    amount,
                    price: (cartItem.price += item.price * amount),
                  }
                : cartItem;
            }),
          },
        };
      }),
  }))
);

export default useStore;
