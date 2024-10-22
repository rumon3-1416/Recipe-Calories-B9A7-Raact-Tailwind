import React from 'react';

const Banner = () => {
  return (
    <div className="relative">
      <img
        className="w-full aspect-square md:aspect-video object-cover rounded-3xl"
        src="https://static.vecteezy.com/system/resources/previews/033/692/644/large_2x/chef-preparing-food-in-the-kitchen-at-the-restaurant-professional-chef-cooking-gourmet-chef-cooking-in-a-commercial-kitchen-ai-generated-free-photo.jpg"
        alt="banner"
      />

      <div className="rounded-3xl absolute inset-0 w-full h-full text-center bg-gradient-to-r from-[#150B2BE5] via-[#150B2B00] to-[#150B2BE5] flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl md:text-4xl lg:text-[52px] lg:leading-[58px] w-[80%] max-w-[900px]">
          Discover an exceptional <br></br> cooking class tailored for you!
        </h1>
        <p className="text-white text-sm md:text-base lg:text-lg w-[80%] max-w-[933px] mt-6 mb-10">
          Experience the finest flavors with fresh ingredients, expertly crafted
          dishes, and a cozy ambiance. Savor every bite at your favorite dining
          destination.
        </p>
        <div className="flex gap-8">
          <button className="bg-[#0BE58A] text-[#150B2B] text-xl font-semibold px-[30px] py-5 rounded-full">
            Explore Now
          </button>
          <button className="text-white text-xl font-semibold px-[30px] py-5 border border-white rounded-full">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
