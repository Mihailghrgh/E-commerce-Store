import { NavLink } from "react-router-dom";
import userSlice from "../Features/userSlice";
const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
];

const Navlinks = () => {
  const { initialUser } = userSlice();

  return (
    <>
      {links.map((item) => {
        const { id, url, text } = item;
        if (
          (url === "checkout" || url === "orders") &&
          !initialUser.user.username
        ) {
          return null;
        }
        return (
          <li key={id}>
            <NavLink className="capitalize bg-primary-content" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default Navlinks;
