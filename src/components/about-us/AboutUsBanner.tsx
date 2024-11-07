import React from "react";

const AboutUsBanner = () => {
  return (
    <div
      className="flex flex-col justify-center"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(191, 219, 254, 0.6), rgba(30, 58, 138, 0.6)), url('/about-us-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="container mx-auto text-stone-700">
        <p className="text-8xl font-bold text-white text-center">About Us</p>
      </div>
    </div>
  );
};

export default AboutUsBanner;
