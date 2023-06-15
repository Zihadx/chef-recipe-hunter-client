import React, { useContext } from "react";
import { Link } from "react-router-dom";
import avatar from '../assets/avatar/avatar.png'
import { AuthContext } from "../pages/Providers/AuthProvider";
const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <nav className="py-3 mt-8">
        <div className="lg:flex items-center text-center md:justify-between ">
          <div>
            <Link to="/">
              <h3 className="text-5xl font-bold">
                Master <span className="text-orange-500">Chef</span>
              </h3>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:text-center">
            <Link to="/" className="text-lg px-3 hover:text-orange-400">
              Home
            </Link>
            <Link to="/blogs" className="text-lg px-3 hover:text-orange-400">
              Blog
            </Link>
            <Link to="/recipe" className="text-lg px-3 hover:text-orange-400">
              Recipe
            </Link>
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
