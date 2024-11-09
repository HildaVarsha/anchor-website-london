import React from "react";

const ContactBanner = () => {
  return (
    <div
      className="flex flex-col justify-center h-[300px] px-4 md:px-0"
      style={{
        backgroundImage:
          "linear-gradient(to top, #1E3A8A, #020617), url('/about-us-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-stone-700">
        <p className="text-8xl font-bold text-white text-center">Contact Us</p>
      </div>
    </div>
  );
};

export default ContactBanner;
