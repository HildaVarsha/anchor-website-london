import React from "react";
import { Button } from "../ui";

const HomeBanner = () => {
  return (
    <div
      className="flex flex-col justify-center"
      style={{
        backgroundImage: "url('/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="container mx-auto text-stone-700">
        <p className="text-5xl font-bold">We Drive Digital</p>
        <p className="text-5xl font-bold py-4">Transformation, Globally.</p>
        <Button className="mt-4">View More</Button>
      </div>
    </div>
  );
};

export default HomeBanner;
