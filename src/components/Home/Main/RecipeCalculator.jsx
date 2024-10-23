import React from 'react';

const RecipeCalculator = () => {
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

        <div className="text-[#282828B3] bg-[#28282808] px-5 py-4 grid grid-cols-[2fr,_6fr,_6fr] lg:grid-cols-[2fr,_6fr,_3fr,_3fr,_6fr] items-center gap-5">
          <p className=" text-[#282828CC] font-semibold">1.</p>
          <p>Chicken Caesar Salad</p>
          <p className="hidden lg:flex">20 minutes</p>
          <p className="hidden lg:flex">400 Calories</p>
          <button className="text-[#150B2B] bg-[#0BE58A] font-medium px-[18px] py-[9px] rounded-full">
            Preparing
          </button>
        </div>
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

        <div className="text-[#282828B3] bg-[#28282808] px-5 py-4 grid grid-cols-[2fr,_8fr,_5fr,_5fr] items-center gap-5">
          <p className=" text-[#282828CC] font-semibold">1.</p>
          <p>Chicken Caesar Salad</p>
          <p>20 minutes</p>
          <p>400 Calories</p>
        </div>
        {/* 2 */}
        <div className="text-[#282828B3] bg-[#28282808] px-5 py-4 grid grid-cols-[2fr,_8fr,_5fr,_5fr] items-center gap-5">
          <p className=" text-[#282828CC] font-semibold">2.</p>
          <p>Chicken Caesar Salad</p>
          <p>20 minutes</p>
          <p>400 Calories</p>
        </div>

        {/* Total Calculation */}
        <div className="text-[#282828CC] lexend-font font-medium px-5 py-4 grid grid-cols-[2fr,_8fr,_5fr,_5fr] items-center gap-5">
          <p></p>
          <p></p>
          <p>Total Time = 45 minutes</p>
          <p>Total Calories = 1050 calories</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCalculator;
