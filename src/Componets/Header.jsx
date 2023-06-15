import React, { useContext } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar/avatar.png";
import { AuthContext } from "../pages/Providers/AuthProvider";
import ActiveLink from "./ActiveLink/ActiveLink";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <nav className="py-3">
        <div className="lg:flex items-center text-center md:justify-between ">
          <div>
            <Link to="/">
              <h3 className="text-3xl font-bold">
                Master <span className="text-orange-500">Chef</span>
              </h3>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:text-center">
            <p className="text-lg px-3 font-semibold mr-4">
              <ActiveLink to="/" >
                Home
              </ActiveLink>
            </p>
            <p className="text-lg px-3 font-semibold ml-4">
              <ActiveLink to="/blogs">Blog</ActiveLink>
            </p>
          </div>
          <div className="flex justify-end items-center">
            {user ? (
              <>
                <button
                  onClick={handleLogOut}
                  className="btn btn-ghost font-bold uppercase"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn btn-ghost font-bold uppercase">
                    Login
                  </button>
                </Link>
              </>
            )}
            <div className="w-12 rounded-full">
              <img
                className="rounded-full w-12 h-12"
                src={user && user.photoURL ? user.photoURL : avatar}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
