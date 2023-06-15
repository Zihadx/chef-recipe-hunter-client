import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
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
    id
  } = chef;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={chefPicture} alt="Shoes" className="rounded-xl h-[200px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{chefName}</h2>
          <p>Years of experience: {yearsOfExperience}</p>
          <p>Likes: {likes}</p>
          <div className="card-actions">
            <Link to={`/recipe/${id}`}>
              <button className="btn btn-ghost bg-orange-500 text-white hover:text-black">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
