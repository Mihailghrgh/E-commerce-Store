import { formatPrice } from "../utils";
import useStore from "../Features/cartSlice";

const CartTotals = () => {
  const { cart, clearCart } = useStore();

  return (
    <div className="card bg-base-300">
      <div className="card-body">
        <p className="flex justify-between text-xs border-b border-t-info-content pb-2">
          <span className="font-sans text-xl text-accent-content">
            Subtotal
          </span>
          <span className="font-sans text-xl text-accent-content">
            {formatPrice(cart.cartTotal)}
          </span>
        </p>
        <p className="flex justify-between text-xs border-b border-t-info-content pb-2">
          <span className="font-sans text-xl text-accent-content">
            Shipping
          </span>
          <span className="font-sans text-xl text-accent-content">
            {formatPrice(500)}
          </span>
        </p>
        <p className="flex justify-between text-xs border-b border-t-info-content pb-2">
          <span className="font-sans text-xl text-accent-content">
            Order Total
          </span>
          <span className="font-sans text-xl text-accent-content">
            {formatPrice(cart.cartTotal + 500)}
          </span>
        </p>
      </div>
      <button className="btn btn-secondary" onClick={() => clearCart()}>
        {" "}
        Reset Cart
      </button>
    </div>
  );
};
export default CartTotals;
