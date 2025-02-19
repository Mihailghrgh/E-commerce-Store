import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Navlinks from "./Navlinks";
import { useEffect, useState } from "react";
import useStore from "../Features/cartSlice";
import userSlice from "../Features/userSlice";

const Navbar = () => {
  const { initialUser, toggleTheme } = userSlice();
  const handleTheme = () => {
    toggleTheme();
  };

  ////Saving the theme to the local storage for users and useEffect before the component mounts

  ////Zustand to update cart amount at the top of the page
  const { cart } = useStore();
  const cartNumItems = cart.numItemsInCart;

  return (
    <nav className="bg-primary-content">
      <div className="navbar align-element">
        <div className="navbar-start ">
          {/* TITLES */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center pb-1"
          >
            Comfy
          </NavLink>
          {/* DROPDOWN SMALL SCREEN */}
          <div className="dropdown pt">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-sm bg-primary-content"
            >
              <Navlinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <Navlinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {/* Moon */}
            <BsMoonFill className="swap-off h-5 w-5" />
            {/* Sun */}
            <BsSunFill className="swap-on h-5 w-5" />
          </label>
          {/* CART LINK */}
          <NavLink
            to="/cart"
            className="btn btn-ghost btn-circle bt-md ml-4 btn-primary"
          >
            <div className="indicator">
              <BsCart3 className="h-7 w-7" />
              <span className="badge badge-sm badge-primary indicator-item">
                {cartNumItems}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
