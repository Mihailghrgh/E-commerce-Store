import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
  const products = useLoaderData();
  const productsArray = products?.products;

  return (
    <div className="mt-12 grid gap-y-8">
      {productsArray.map((item) => {
        const { title, price, image, company } = item.attributes;
        const dollarAmount = formatPrice(price);

        return (
          <Link key={item.id} to={`/products/${item.id}`}>
            <div className="items-center bg-primary-content p-3 rounded-lg flex sm:flex-row shadow-xl hover:shadow-2xl duration-300 group ">
              <img
                src={image}
                alt={title}
                className="h-28 w-28 mr-2 rounded-lg object-cover group-hover:scale-105 transition duration-300 "
              />
              <div className="ml-5 sm:ml-16">
                <h3 className="text-lg font-medium capitalize ">{title}</h3>
                <h3 className="text-md font-medium  capitalize">{company}</h3>
                <p className="ml-0 sm:ml-auto text-lg text-primary font-medium">
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

export default ProductsList;
