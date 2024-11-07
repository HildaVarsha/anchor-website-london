import {
  AboutAwards,
  AboutLeadingTechnology,
  AboutUsBanner,
  AboutWorkingProcess,
} from "@/components/about-us";
import { Footer } from "@/components/shared";
import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full h-full">
      <AboutUsBanner />
      <AboutLeadingTechnology />
      <AboutWorkingProcess />
      <AboutAwards />
      <Footer />
    </div>
  );
};

export default AboutUs;
