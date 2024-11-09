import React from "react";
import { PageHeader } from "../shared";
import Image from "next/image";
import { Check } from "lucide-react";

const ServicesLeadingPower = () => {
  return (
    <div className="bg-blue-950 py-12 h-full px-4 md:px-0">
      <div className="container mx-auto flex gap-12 flex-col md:flex-row items-center justify-between">
        <div className="w-full">
          <div className="max-w-md">
            <PageHeader
              label={"We're leading The Power Of Technology"}
              className="text-white"
            />
          </div>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-1.5 text-white">
              <Check className=" w-4 h-4" />
              World IT Solutions & Services
            </div>
            <div className="flex items-center gap-1.5 text-white">
              <Check className=" w-4 h-4" />
              Always Latest Technology
            </div>
          </div>
          <div className="flex items-center gap-12 pt-4">
            <div className="flex items-center gap-1.5 text-white">
              <Check className=" w-4 h-4" />
              24 Hours Customer Service
            </div>
            <div className="flex items-center gap-1.5 text-white">
              <Check className=" w-4 h-4" />
              World Best Service
            </div>
          </div>
          <p className="text-white pt-8">
            Empowering innovation through cutting-edge technology solutions
            tailored to drive growth and transformation.
          </p>
        </div>
        <div className="w-full relative hidden md:block">
          <Image
            src={"/services-dot.png"}
            alt={"Leading Services"}
            width={200}
            height={200}
            objectFit="cover"
            className=""
          />
          <Image
            src={"/services-dot.png"}
            alt={"Leading Services"}
            width={200}
            height={200}
            objectFit="cover"
            className="absolute top-4 right-0"
          />
          <Image
            src={"/services-leading.png"}
            alt={"Leading Services"}
            width={300}
            height={400}
            objectFit="cover"
            className="absolute -top-8 left-64 z-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesLeadingPower;
