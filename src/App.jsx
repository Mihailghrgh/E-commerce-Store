import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ErrorElement } from "./components";

////Loaders Import
import { loader as LandingLoader } from "./pages/Landing";
import { loader as ProductLoader } from "./pages/SingleProduct";
import { loader as ProductsLoader } from "./pages/Products";
import { loader as CheckoutLoader } from "./pages/Checkout";
import { loader as OrdersLoader } from "./pages/Orders";
////Actions Import
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";
////Tanstack react-query imports
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader(queryClient),
      },
      {
        path: "products",
        element: <Products />,
        loader: ProductsLoader(queryClient),
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: ProductLoader(queryClient),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      { path: "about", element: <About /> },
      {
        path: "checkout",
        element: <Checkout />,
        loader: CheckoutLoader,
        action: checkoutAction(queryClient),
      },
      {
        path: "orders",
        element: <Orders to='/login' replace/>,
        loader: OrdersLoader(queryClient),
      },
    ],
  },

  {
    path: "register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
