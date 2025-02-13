import { useLoaderData } from "react-router-dom";
import { formatPrice, customHook } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import { generateAmount } from "../utils";

export const loader = async ({ params }) => {
  const response = await customHook(`/products/${params.id}`);

  const { title, image, price, description, colors } =
    response.data.data.attributes;

  return { title, image, price, description, colors };
};

const SingleProduct = () => {
  const data = useLoaderData();
  const { title, image, price, description, company, colors } = data;
  const dollarsAmount = formatPrice(price);

  const [productColor, setProductColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link className="text-primary sm:text-center font-semibold" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-primary font-semibold sm:text-center"
              to="/products"
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-2xl lg:w-full"
        />
        {/* DESCRIPTION */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl text-accent-content">{dollarsAmount}</p>
          <p className="mt-6 leading-8 text-accent-content">{description}</p>
          {/* COLORS PRODUCTS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              {" "}
              Colors
            </h4>
            <div className="mt-2">
              {colors.map((item) => {
                return (
                  <button
                    key={item}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      item === productColor && `border-2 border-primary`
                    }`}
                    style={{ backgroundColor: item }}
                    onClick={() => setProductColor(item)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="text-md font-medium -tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              id="amount"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmount(10)}
            </select>
          </div>
          {/* CART BTN */}
          <div className="mt-5">
            <button
              className=" btn btn-primary btn-md"
              onClick={() => console.log("Added to bag")}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
