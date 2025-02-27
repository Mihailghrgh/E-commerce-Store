import {
  Navigate,
  redirect,
  replace,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { toast } from "react-toastify";
import { customHook } from "../utils";
import { checkLogin } from "../utils/userLogin";
import {
  Header,
  Navbar,
  PaginationContainer,
  SectionTitle,
} from "../components";
import OrdersList from "../components/OrdersList";
import userSlice from "../Features/userSlice";
import { useEffect } from "react";

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customHook.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const user = checkLogin();
    if (!user?.user?.username) {
      return redirect("login?warning=checkout");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        `please double check the credentials entered`;
      toast.error(errorMessage);

      if (error?.response?.status === 401 || 403) {
        toast.warn("Please login to complete checkout");
      }
      return null;
    }
  };

const Orders = () => {
  const { initialUser } = userSlice();
  const navigate = useNavigate();
  useEffect(() => {
    if (initialUser.user.username === "") {
      navigate("/", { replace: true });
    }
  }, [initialUser]);

  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return (
      <>
        <SectionTitle text="No orders yet... please place an order" />
      </>
    );
  }
  return (
    <>
      <SectionTitle text="Orders" />
      <OrdersList />
      <PaginationContainer />
    </>
  );
};
export default Orders;
