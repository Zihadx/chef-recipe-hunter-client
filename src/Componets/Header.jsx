import React from "react";
import { Link, useLoaderData } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="py-3 mt-8">
        <div className="lg:flex items-center text-center md:justify-between ">
          <div>
            <Link to="/">
              <h3 className="text-5xl font-bold">
                Master{" "}
                <span className="text-orange-500">Chef</span>
              </h3>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:text-center">
            <Link to="/" className="text-lg px-3 hover:text-orange-400">Home</Link>
            <Link to="/blogs"  className="text-lg px-3 hover:text-orange-400">Blog</Link>
            <Link to="/recipe"  className="text-lg px-3 hover:text-orange-400">Recipe</Link>
          </div>
          <div>
            <button className=" bg-slate-500 text-white px-3 py-2 rounded-md font-semibold">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
