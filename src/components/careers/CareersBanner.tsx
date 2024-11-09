import React from "react";

const CareersBanner = () => {
  return (
    <div
      className="py-12 flex flex-col justify-cente h-[600px] px-4 md:px-0"
      style={{
        backgroundImage: "url('/career-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-stone-700">
        <p className="text-8xl font-bold  text-center text-white md:pt-28">
          Career
        </p>
        <p className="text-lg  max-w-xl mx-auto pt-8 text-white">
          We owe our success to our passionate and dedicated team. We believe in
          nurturing relationships for creating a positive impact in our
          environment.
        </p>
      </div>
    </div>
  );
};

export default CareersBanner;
