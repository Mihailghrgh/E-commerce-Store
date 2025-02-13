import { Link, useLoaderData } from "react-router-dom";

const ProductsGrid = () => {
  const products = useLoaderData();
  const productsArray = products?.products;

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {productsArray.map((item) => {
        const { title, price, image } = item.attributes;
        return (
          <Link
            className="card w-full shadow-lg hover:shadow-2xl transition duration-300"
            key={item.id}
            to={`/products/${item.id}`}
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
              <div className="card-body items-center text-center">
                <h2 className="card-title capitalize tracking-wider">
                  {title}
                </h2>
                <spam className="text-secondary">{price}</spam>
              </div>
            </figure>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
