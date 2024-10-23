import React from 'react';
import PropTypes from 'prop-types';

import timeIcon from '../../../assets/Icons/time.png';
import fireIcon from '../../../assets/Icons/trending-topic.png';

const Card = ({ recipe, addWantCook }) => {
  return (
    <div className="p-6 border-2 border-[#28282833] rounded-2xl">
      <img
        className="w-full aspect-video object-cover rounded-2xl"
        src={recipe.recipe_image}
        alt="recipe"
      />

      <h3 className="text-[#282828] text-[20px] leading-[25px] font-semibold pt-6">
        {recipe.recipe_name}
      </h3>

      <p className="text-[#878787] fira-font border-b-2 border-[#2828281A] py-4">
        {recipe.short_description}
      </p>

      <h4 className="text-[#282828] text-lg font-medium pt-6">
        Ingredients: {recipe.ingredients.length}
      </h4>

      <ul className="text-[#878787] fira-font list-disc ps-6 border-b-2 border-[#2828281A] py-4">
        {recipe.ingredients.map((rind, index) => (
          <li className="text-[#878787] text-lg leading-8" key={index}>
            {rind}
          </li>
        ))}
      </ul>

      <div className="text-[#282828CC] fira-font py-6 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img className="size-[18px]" src={timeIcon} alt="time" />
          <p>{recipe.preparing_time}</p>
        </div>
        <div className="flex items-center gap-2">
          <img className="size-[18px]" src={fireIcon} alt="calorie" />
          <p>{recipe.calories}</p>
        </div>
      </div>

      <button
        onClick={() => addWantCook(recipe)}
        className="bg-[#0BE58A] text-[#150B2B] text-lg font-medium px-6 py-3 rounded-full hover:opacity-80"
      >
        Want to cook
      </button>
    </div>
  );
};

Card.propTypes = {
  recipe: PropTypes.object,
  addWantCook: PropTypes.func,
};

export default Card;
