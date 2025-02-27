import { useLoaderData } from "react-router-dom";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customHook } from "../utils";

const allProductQuery = (params) => {
  const { search, category, company, price, sort, shipping, page } = params;

  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      price ?? 100000,
      sort ?? "a-z",
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customHook(url, { params }),
  };
};

const url = "/products";
export const loader =
  (queryClient) =>
  async ({ request }) => {
    ////The basic way to fetch the search Params based on input

    // const params = new URL(request.url).searchParams;
    // const search = params.get("company");
    // console.log(search);

    //// Better way to do it
    //! Creates and Object and spreads it from the new URL
    ////Object.fromEntries
    //! It extracts the params to create an iterable Key-Pair Value
    ////searchParams.entries()

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    ////Requests the new Options based on the Filter input from the loader and returns as well the new Items selected
    const response = await queryClient.ensureQueryData(allProductQuery(params));
    return { products: response.data.data, meta: response.data.meta, params };
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
