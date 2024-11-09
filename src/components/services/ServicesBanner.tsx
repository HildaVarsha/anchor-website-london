import React from "react";

const ServicesBanner = () => {
  return (
    <div
      className="flex flex-col justify-center h-[600px] px-4 md:px-0"
      style={{
        backgroundImage: "url('/services-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-stone-800">
        <p className="text-4xl md:text-8xl font-bold text-center">Services</p>
        <p className="text-center pt-4 max-w-2xl mx-auto ">
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
