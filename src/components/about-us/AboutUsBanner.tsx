import React from "react";

const AboutUsBanner = () => {
  return (
    <div
      className="flex flex-col justify-center h-[600px] px-4 md:px-0"
      style={{
        backgroundImage: "url('/about-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-stone-700">
        <p className="text-8xl font-bold text-white text-center">About Us</p>
        <p className="text-lg text-white pt-4  max-w-xl mx-auto">
          we prioritize personal integrity and legal compliance to foster trust
          and build an ethical environment where everyone can thrive. Our
          commitment to exemplary corporate governance reflects our dedication
          to empowering success through responsible practices.
        </p>
      </div>
    </div>
  );
};

export default AboutUsBanner;
