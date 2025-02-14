import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsGrid = () => {
  const products = useLoaderData();
  const productsArray = products?.products;

  return (
    <div className="pt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {productsArray.map((item) => {
        const { title, price, image } = item.attributes;
        const dollarAmount = formatPrice(price);

        return (
          <Link key={item.id} to={`/products/${item.id}`} className="group">
            <div className="rounded-xl bg-primary-content p-4 shadow-md transition duration-300 group-hover:shadow-2xl">
              <div className="mb-4">
                <img
                  src={image}
                  alt={title}
                  className="h-48 w-full rounded-lg object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold capitalize tracking-wide">
                  {title}
                </h2>
                <p className="mt-2 text-primary font-semibold">
                  {dollarAmount}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
