import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Recipes = () => {
  const { id } = useParams();
  const chefDetails = useLoaderData();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const data = chefDetails.find((recipe) => recipe.id == id);
    setDetails(data);
  }, []);
  const {
    chefName,
    chefPicture,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    foodImage,
    rating,
    shortBio,
    recipes,
  } = details;
  return (
    <div>
      <div className="bg-slate-100 mx-4 md:mx-24 py-8 px-4 md:px-12 rounded-lg mt-12">
        <h1 className="text-5xl font-bold text-center">
          Chef Details of <span className="text-orange-500">{chefName}</span>
        </h1>
        <div className="text-center">
          <img
            className="h-[400px] w-[800px] mx-auto mt-8 rounded-lg"
            src={chefPicture}
            alt=""
          />
          <p className="mt-4 w-2/3 mx-auto">{shortBio}</p>
          <p className="mt-4">Total Likes: {likes}</p>
        </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-4">
            <p>Years of experience: {yearsOfExperience}</p>
            <p>Quantity: {numberOfRecipes}</p>
            <p>Rating: {rating}</p>
        </div>
      </div>


        

      {/* <div className="card bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipes}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */}


    </div>
  );
};

export default Recipes;
