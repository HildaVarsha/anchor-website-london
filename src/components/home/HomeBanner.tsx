import React from "react";
import { Button } from "../ui";

const HomeBanner = () => {
  return (
    <div
      className="flex flex-col justify-center h-[600px]"
      style={{
        backgroundImage: "url('/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-stone-700 px-4 md:px-0">
        <p className="text-3xl md:text-5xl font-bold">We Drive Digital</p>
        <p className="text-3xl md:text-5xl font-bold py-4">
          Transformation, Globally.
        </p>
        <Button className="mt-4">View More</Button>
      </div>
    </div>
  );
};

export default HomeBanner;
