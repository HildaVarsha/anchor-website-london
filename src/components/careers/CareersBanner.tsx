import React from "react";

const CareersBanner = () => {
  return (
    <div
      className="flex flex-col justify-center"
      style={{
        backgroundImage:
          "linear-gradient(to top, #F6FBFF, #0E1F51), url('/about-us-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="container mx-auto text-stone-700">
        <p className="text-8xl font-bold text-white text-center">Career</p>
      </div>
    </div>
  );
};

export default CareersBanner;
