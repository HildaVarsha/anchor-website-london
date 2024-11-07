import React from "react";

const ServicesBanner = () => {
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
        <p className="text-8xl font-bold text-white text-center">Services</p>
        <p className="text-center pt-4 max-w-2xl mx-auto text-white">
          We offer full-funnel Digital Marketing, Web Design & Development,
          Mobile App Development, Software development & Redevelopment,
          Designing, Hosting Service services to help businesses gain a
          competitive edge.
        </p>
      </div>
    </div>
  );
};

export default ServicesBanner;
