import { toast } from "react-toastify";
import SubmitBtn from "./SubmitBtn";
import FormInput from "./FormInput";
import { Form, redirect } from "react-router-dom";
import { cartClear, userCart } from "../utils/userLogin";
import { checkLogin } from "../utils/userLogin";
import { customHook } from "../utils";
import { formatPrice } from "../utils";

export const action = async ({ request }) => {
  ////Getting the request data from the Forms
  const formData = await request.formData();
  const { name, address } = Object.fromEntries(formData);
  ////Getting the active user and Cart Data to send over to the backend
  const user = checkLogin();
  const cart = userCart();

  ////Formatting the data for axios  ////Need to change the formatPrice at some point !!!!
  const info = {
    address,
    cartItems: cart.cartItems,
    chargeTotal: cart.cartTotal,
    name,
    numItemsInCart: cart.numItemsInCart,
    orderTotal: formatPrice(cart.cartTotal + 500),
  };

  console.log(info);

  console.log(user.jwt);

  try {
    const response = await customHook.post(
      "/orders",
      { data: info },
      { headers: { Authorization: `Bearer ${user.jwt}` } }
    );
    cartClear();
    redirect("/");
    toast.success("You order has been placed!");
    return null;
  } catch (error) {
    ////Developer Info
    console.log(error);
    const errorMessage =
      error?.response?.data?.error?.message ||
      `please double check the credentials entered`;
    toast.error(errorMessage);

    if (error?.response?.status === 401 || 403) {
      toast.warn("Please login to complete checkout");
      redirect("/");
    }

    return null;
  }
};

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">Shipping Info</h4>
      <FormInput label="name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="`mt-4">
        <SubmitBtn text="place your order" color="primary" />
      </div>
    </Form>
  );
};
export default CheckoutForm;
