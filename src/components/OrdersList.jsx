import { useLoaderData } from "react-router";
import daisyui from "daisyui";

const OrdersList = () => {
  const { orders, meta } = useLoaderData();

  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize ml-3">total orders: {meta.pagination.total}</h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra items-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Product</th>
              <th>Cost</th>
              <th className="hidden sm:block">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((orders) => {
              const id = orders.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                orders.attributes;
              
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td>{createdAt.slice(0,10)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrdersList;
