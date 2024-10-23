import PropTypes from 'prop-types';
import React, { useState } from 'react';

const RecipeCalculator = ({ wantCook, removeCook }) => {
  const [cooking, setCooking] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalorie, setTotalCalorie] = useState(0);

  const handleCurrentlyCooking = recip => {
    const [id, name, time, calorie] = recip;

    removeCook(id);

    setTotalTime(totalTime + Number(time.split(' ')[0]));
    setTotalCalorie(totalCalorie + Number(calorie.split(' ')[0]));

    setCooking([...cooking, { id, name, time, calorie }]);
  };

  return (
    <div className="border-2 border-[#28282833] rounded-2xl py-8">
      <h2 className="text-[282828] text-2xl font-semibold text-center pb-4">
        Want to cook:{' '}
      </h2>
      <div className="border-b-2 border-[#28282826] w-[80%] max-w-[350px] mx-auto"></div>

      <div className="fira-font">
        <div className="text-[#878787] font-medium px-5 pt-6 pb-4 grid grid-cols-[2fr,_6fr,_6fr] lg:grid-cols-[2fr,_6fr,_3fr,_3fr,_6fr] gap-5">
          <p> </p>
          <p>Name</p>
          <p className="hidden lg:block">Time</p>
          <p className="hidden lg:block">Calories</p>
          <p> </p>
        </div>

        {wantCook.map((wc, index) => (
          <div
            key={wc.recipe_id}
            className="text-[#282828B3] bg-[#28282808] px-5 py-4 grid grid-cols-[2fr,_6fr,_6fr] lg:grid-cols-[2fr,_6fr,_3fr,_3fr,_6fr] items-center gap-5"
          >
            <p className=" text-[#282828CC] font-semibold">{index + 1}</p>
            <p>{wc.recipe_name}</p>
            <p className="hidden lg:flex">{wc.preparing_time}</p>
            <p className="hidden lg:flex">{wc.calories}</p>
            <button
              onClick={() =>
                handleCurrentlyCooking([
                  wc.recipe_id,
                  wc.recipe_name,
                  wc.preparing_time,
                  wc.calories,
                ])
              }
              className="text-[#150B2B] bg-[#0BE58A] hover:opacity-80 font-medium px-[18px] py-[9px] rounded-full"
            >
              Preparing
            </button>
          </div>
        ))}
      </div>

      {/* Currently cooking */}
      <h2 className="text-[282828] text-2xl font-semibold text-center pt-8 pb-4">
        Currently Cooking:{' '}
      </h2>
      <div className="border-b-2 border-[#28282826] w-[80%] max-w-[350px] mx-auto"></div>

      <div className="fira-font">
        <div className="text-[#878787] font-medium px-5 pt-6 pb-4 grid grid-cols-[2fr,_8fr,_5fr,_5fr] gap-5">
          <p> </p>
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
        </div>

        {cooking.map((ck, index) => (
          <div
            key={index}
            className="text-[#282828B3] bg-[#28282808] px-5 py-4 grid grid-cols-[2fr,_8fr,_5fr,_5fr] items-center gap-5"
          >
            <p className=" text-[#282828CC] font-semibold">{index + 1}</p>
            <p>{ck.name}</p>
            <p>{ck.time}</p>
            <p>{ck.calorie}</p>
          </div>
        ))}

        {/* Total Calculation */}
        <div className="text-[#282828CC] lexend-font font-medium px-5 py-4 grid grid-cols-[2fr,_8fr,_5fr,_5fr] items-center gap-5">
          <p></p>
          <p></p>
          <p>Total Time = {totalTime} minutes</p>
          <p>Total Calories = {totalCalorie} calories</p>
        </div>
      </div>
    </div>
  );
};

RecipeCalculator.propTypes = {
  wantCook: PropTypes.array.isRequired,
  removeCook: PropTypes.func,
};

export default RecipeCalculator;
