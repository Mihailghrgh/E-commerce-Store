import useStore from "../Features/cartSlice";
import { CartItemsList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";
import userSlice from "../Features/userSlice";

const Cart = () => {
  ////Temporary
  const { cart } = useStore();
  const { initialUser } = userSlice();
  const user = initialUser.user.username;

  if (cart.numItemsInCart === 0) {
    return <SectionTitle text="Your cart is Empty" />;
  } else {
    return (
      <>
        <SectionTitle text="Shopping Cart" />
        <div className="mt-8 grid gap-8  lg:grid-cols-12">
          <div className="lg:col-span-8">
            <CartItemsList />
          </div>
          <div className="lg:col-span-4 lg:pl-4">
            <CartTotals />
            {user ? (
              <Link to="/checkout" className="btn btn-primary btn-block mt-8">
                Proceed to checkout
              </Link>
            ) : (
              <Link to="/login" className="btn btn-primary btn-block mt-8">
                please login
              </Link>
            )}
          </div>
        </div>
      </>
    );
  }
};
export default Cart;
