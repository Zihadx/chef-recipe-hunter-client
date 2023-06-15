import React from "react";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    id,
  } = chef;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <LazyLoadImage
            src={chefPicture}
            alt="Chef"
            className="rounded-xl h-[200px]"
            effect="blur"
          />
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
