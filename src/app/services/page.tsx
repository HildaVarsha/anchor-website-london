import {
  ServicesBanner,
  ServicesLatestPortFolio,
  ServicesLeadingPower,
  ServicesQuality,
} from "@/components/services";
import { Footer } from "@/components/shared";
import React from "react";

const Services = () => {
  return (
    <div className="h-full w-full">
      <ServicesBanner />
      <ServicesQuality />
      <ServicesLeadingPower />
      <ServicesLatestPortFolio />
      <Footer />
    </div>
  );
};

export default Services;
