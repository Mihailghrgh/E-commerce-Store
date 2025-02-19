import useStore from "../Features/cartSlice";
import { formatPrice, generateAmount } from "../utils";

const CartItemsList = () => {
  const { cart, removeItem, editItem } = useStore();

  return (
    <>
      {cart.cartItems.map((item) => {
        const handleAmount = (item, e) => {
          editItem({ item: item, amount: e.target.value });
        };

        if (!item) return null;

        return (
          <div
            key={item.cartId}
            className="mb-12 flex flex-col items-center md:items-start gap-y-4 sm:flex-row flew-wrap border-b border-x-base-300 pb-6 last:border-b-0"
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
            />
            {/* INFO */}
            <div className="sm:ml-16 md:w-48">
              {/* TITLE */}
              <h3 className="capitalize font-medium">{item.title}</h3>
              {/* COMPANY */}
              <h4 className="capitalize mt-2 text-sm text-center md:text-start lg:text-start text-primary">
                {item.company}
              </h4>
              {/* COLOR BUTTONS*/}
              <p className="mt-2 justify-center md:justify-start text-base capitalize flex items-center gap-x-2 ">
                {" "}
                color:{" "}
                <span
                  className="badge badge-sm"
                  style={{ backgroundColor: item.colors }}
                ></span>
              </p>
            </div>
            <div className="sm:ml-24 flex flex-col items-center">
              {/* AMOUNT ITEM */}
              <div className="form-control max-w-xs ">
                <label htmlFor="amount" className="label p-0">
                  <span className="label-text">Amount</span>
                </label>
                <select
                  name="amount"
                  id="amount"
                  className="mt-2 w-14 select select-base select-bordered select-xs"
                  value={item.amount}
                  onChange={(e) => handleAmount(item, e)}
                >
                  {generateAmount(5)}
                </select>
              </div>
              {/* REMOVE ITEM */}
              <button
                className="mt-3 link link-primary link-hover text-sm"
                onClick={() => removeItem(item)}
              >
                remove
              </button>
            </div>
            {/* PRICE */}
            <p className="font-medium sm:ml-auto text-">
              {formatPrice(item.price)}
            </p>
          </div>
        );
      })}
    </>
  );
};
export default CartItemsList;
