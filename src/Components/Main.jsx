import React from "react";
import Image from "./Image";
import Buttons from "./Buttons";
import Para from "./Para";
import Heading from "./Heading";

const Main = () => {
  return (
    <div className="container h-screen w-screen flex justify-center items-center">
      <div className="content flex-1  ml-9 p-5 flex flex-col justify-center items-center text-center">
        <Heading />

        <Para />

        <Buttons />
      </div>
      <Image />
    </div>
  );
};

export default Main;
