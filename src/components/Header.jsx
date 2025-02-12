import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-transparent-content py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {/* ////User */}
        {/* ////Links//// */}
        <div className="flex gap-x-6 justify-center items-center">
          <Link
            to="/login"
            className="link link-hover font-semibold link-primary text-xs sm:text-sm"
          >
            Sign In / Guest
          </Link>
          <Link
            to="/register"
            className="link link-hover text-xs font-semibold link-primary sm:text-sm"
          >
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
