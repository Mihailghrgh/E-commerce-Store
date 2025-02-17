import useStore from "../Features/cartSlice";

const CartItemsList = () => {
  const { cart } = useStore();
  return (
    <>
      {cart.cartItems.map((item) => {
        return <h1 key={item.cartId}>{item.amount}</h1>;
      })}
    </>
  );
};
export default CartItemsList;
