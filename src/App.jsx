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
////Actions Import
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";


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
        loader: LandingLoader,
      },
      {
        path: "products",
        element: <Products />,
        loader: ProductsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: ProductLoader,
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
      },
      {
        path: "orders",
        element: <Orders />,
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
  return <RouterProvider router={router} />;
};
export default App;
