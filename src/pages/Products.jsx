import { useLoaderData } from "react-router-dom";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customHook } from "../utils";

const url = "/products";
export const loader = async ({ request }) => {
  const response = await customHook(url);
  return { products: response.data.data, meta: response.data.meta };
};

const Products = () => {

  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
