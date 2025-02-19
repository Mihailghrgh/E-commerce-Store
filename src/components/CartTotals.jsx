import { formatPrice } from "../utils";
import useStore from "../Features/cartSlice";

const CartTotals = () => {
  const { cart, clearCart } = useStore();

  const newCartTotal = cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.amount,
    0
  );

  return (
    <div className="card bg-primary-content">
      <div className="card-body">
        <p className="flex justify-between text-xs border-b border-t-info-content pb-2">
          <span className="font-medium  text-xs  text-accent-content">
            Subtotal
          </span>
          <span className="font-medium  text-xs  text-accent-content">
            {formatPrice(cart.cartTotal)}
          </span>
        </p>
        <p className="flex justify-between text-base  border-b border-t-info-content pb-2">
          <span className="font-medium text-xs  text-accent-content">
            Shipping
          </span>
          <span className="font-medium  text-xs text-accent-content">
            {formatPrice(500)}
          </span>
        </p>
        <p className="flex justify-between text-sm mt-4 pb-2">
          <span>Order Total</span>
          <span className="font-medium">{formatPrice(newCartTotal + 500)}</span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
