import React from "react";
import { Link } from "react-router-dom";
import "../Css/Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="hero-main w-screen">
        <div className="main-hero-part h-screen flex flex-col justify-between items-center">
          <div className="hero-top px-8 sm:px-0">
            <h1 className="font-general text-black font-[600] text-4xl pt-20  sm:text-center">
              Buy and sell cars
            </h1>
            <p className="font-general font-[500] mt-3 sm:text-center">
              Get best dill in your near by area. Get the best deals in best
              price.
            </p>
          </div>
          <div className="hero-bottom mb-[10rem]">
            <Link
            to='/categorys'
              type="button"
              class="text-white bg-black hover:bg-black focus:outline-none focus:ring-4 focus:ring-black font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black"
            >
              Order your car
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
