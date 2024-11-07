import {
  CareersBanner,
  CareersGrowth,
  CareersJoinUs,
  CareersLife,
} from "@/components/careers";
import { Footer } from "@/components/shared";
import React from "react";

const Careers = () => {
  return (
    <>
      <CareersBanner />
      <CareersJoinUs />
      <CareersGrowth />
      <CareersLife />
      <Footer />
    </>
  );
};

export default Careers;
