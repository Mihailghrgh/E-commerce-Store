import { CheckoutForm, SectionTitle, CartTotals } from "../components";
import useStore from "../Features/cartSlice";
import { Link, redirect } from "react-router-dom";
import userSlice from "../Features/userSlice";
import { checkLogin } from "../utils/userLogin";
import { toast } from "react-toastify";

export const loader = () => {
  const user = checkLogin();

  if (user.user.username === null) {

    return redirect("/login?warning=checkout");
  }

  return null;
};

const Checkout = () => {
  const { cart } = useStore();

  if (cart.numItemsInCart === 0) {
    return <SectionTitle text="Your cart is Empty" />;
  } else {
    return (
      <>
        <SectionTitle text="Place your order" />
        <div className="mt-2 grid gap-8 md:grid-cols-2 items-start">
          <CheckoutForm />
          <CartTotals />
        </div>
      </>
    );
  }
};
export default Checkout;
