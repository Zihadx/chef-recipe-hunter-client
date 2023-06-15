import React from "react";

const RecipeCard = ({ recipe }) => {
  if (!recipe) {
    return null;
  }
  const { recipeName, cookingMethod, ingredients, imageURL } = recipe;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[300px]" src={imageURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {recipeName}</h2>
        <p>Method: {cookingMethod}</p>

        <div>
          {ingredients && ingredients.length > 0 ? (
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          ) : (
            <p>No ingredients available</p>
          )}
        </div>
        <div className="card-actions">
          <button className="btn btn-ghost bg-orange-500 text-white hover:text-black">
            Add to favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
