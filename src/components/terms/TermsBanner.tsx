import React from "react";

const TermsBanner = ({ label }: { label: string }) => {
  return (
    <div
      className="flex flex-col justify-center h-[600px] px-4 md:px-0"
      style={{
        backgroundImage: "url('/terms.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-stone-700">
        <p className="text-6xl md:text-8xl font-bold text-white text-center">
          {label}
        </p>
      </div>
    </div>
  );
};

export default TermsBanner;
