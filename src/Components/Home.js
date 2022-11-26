import React, { useState } from "react";
import ButtonsGroup from "./ButtonsGroup";
import Hero from "./Hero";
import MainAdd from "./MainAdd";
import "../Css/BottomSection.css";
import CarCategores from "./CarCategorys";

const Home = () => {
  const [addData, setAddData] = useState([]);
  fetch("http://localhost:5000/getAllProductADS")
    .then((res) => res.json())
    .then((result) => setAddData(result));
  return (
    <div>
      <Hero></Hero>
      {addData.length > 0 ? <MainAdd add={addData}></MainAdd> : undefined}
      <ButtonsGroup></ButtonsGroup>
      <CarCategores></CarCategores>
      <div className="bottom-section w-screen">
        <div className="title-section h-screen flex justify-center items-center flex-col px-8 sm:px-0">
          <h1 className="text-white text-4xl font-general font-[500]">
            Free maintenance and free delivery
          </h1>
          <p className="text-white text-4xl font-general font-[500]">
            247 customer support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
