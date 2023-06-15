import React, { useEffect, useState } from "react";
import ChefCard from "./routes/ChefCard";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div className="mt-12 mb-12">
      <h1 className="font-bold text-5xl text-center">Our best Chefs</h1>
      <p className="text-center mt-4">Welcome to our Best Chefs section, where we celebrate the extraordinary talents of culinary geniuses who <br /> have revolutionized the world of gastronomy. </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {chefs.map((chef) => (
        <ChefCard key={chef.id} chef={chef}></ChefCard>
      ))}
      </div>
    </div>
  );
};

export default Chefs;
