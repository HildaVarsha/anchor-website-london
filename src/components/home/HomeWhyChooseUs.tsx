import React from "react";
import { PageHeader } from "../shared";

const HomeWhyChooseUs = () => {
  return (
    <div className="py-12 bg-blue-50">
      <div className="container mx-auto">
        <PageHeader label={"Why Choose Us?"} className="" />
        <p className="">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution
          Our objective is to assist businesses in accelerating the adoption of
          new technologies, resolving difficult issues that arise frequently
          throughout digital transformation, and orchestrating continuous
          innovation.
        </p>
        <div className="pt-8 flex items-center gap-12">
          <div className="w-48 h-48 border-[20px] border-blue-950 rounded-full text-blue-950 bg-white font-bold flex flex-col items-center justify-center">
            <p className=" text-center">560+</p>
            <p className="text-center">Projects Completed</p>
          </div>
          <div className="w-48 h-48 border-[20px] border-blue-950 rounded-full text-blue-950 bg-white font-bold flex flex-col items-center justify-center">
            <p className="text-center">500+</p>
            <p className="text-center">Happy Clients</p>
          </div>
          <div className="w-48 h-48 border-[20px] border-blue-950 rounded-full text-blue-950 bg-white font-bold flex flex-col items-center justify-center">
            <p className="text-center">5+ Years of</p>
            <p className="text-center">Driving Digital Innovation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyChooseUs;
