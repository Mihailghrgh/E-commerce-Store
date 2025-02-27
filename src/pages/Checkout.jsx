import { CheckoutForm, SectionTitle, CartTotals } from "../components";
import useStore from "../Features/cartSlice";
import { Link, redirect, useNavigate } from "react-router-dom";
import userSlice from "../Features/userSlice";
import { checkLogin } from "../utils/userLogin";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const loader = () => {
  const user = checkLogin();

  if (user.user.username === "") {
    return redirect("/login");
  }

  return null;
};

const Checkout = () => {
  const { cart } = useStore();
  const { initialUser } = userSlice();
  const navigate = useNavigate();

  useEffect(() => {
    if (initialUser.user.username === "") {
      navigate("/login", { replace: true });
    }
  }, [initialUser]);

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
