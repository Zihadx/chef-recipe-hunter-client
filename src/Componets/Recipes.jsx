import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";

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
      <div className="bg-slate-100 py-8 px-4 md:px-12 rounded-lg mt-12">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-12">
      {recipes && recipes.map((recipe) => (
        <RecipeCard key={recipe.id }recipe={recipe}> </RecipeCard>
      ))}
      </div>
    </div>
  );
};

export default Recipes;
