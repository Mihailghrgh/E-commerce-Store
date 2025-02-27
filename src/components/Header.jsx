import { Link, useNavigate } from "react-router-dom";
import userSlice from "../Features/userSlice";
import useStore from "../Features/cartSlice";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const { initialUser, userLogout } = userSlice();
  const navigate = useNavigate();
  const { clearCart } = useStore();
  const queryClient = useQueryClient;

  const handleLogout = () => {
    navigate("/");
    clearCart();
    userLogout();
    toast.success("User logged out successfully");
    queryClient.removeQueries();
  };
  return (
    <header className="bg-primary-content ">
      <div className="py-4 md:py-2 flex justify-center">
        {/* ////Links//// */}
        <div>
          {initialUser.user.username === null ? (
            <div className="flex gap-x-6 justify-center items-center">
              <Link
                to="/login"
                className="link link-hover font-semibold link-primary"
              >
                Sign In / Guest
              </Link>
              <Link
                to="/register"
                className="link link-hover font-semibold link-primary"
              >
                Create Account
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-x-4 ml-auto">
              <p className="text-primary font-semibold">
                {initialUser.user.username === "demo user"
                  ? `Logged in as Guest`
                  : `Welcome back ${initialUser.user.username}!`}
              </p>
              <button
                className="btn btn-xs btn-outline btn-primary"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
