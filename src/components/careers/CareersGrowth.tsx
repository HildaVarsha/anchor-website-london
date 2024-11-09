import Image from "next/image";
import React from "react";
import { PageHeader } from "../shared";

const CareersGrowth = () => {
  return (
    <div className="py-12 bg-blue-950 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-12">
        <div className="w-full">
          <PageHeader
            label="Career Growth at Anchor Informatics"
            className="text-blue-600"
          />
          <p className="text-lg font-semibold text-white">
            At Anchor Informatics, we believe that growth is not just a
            possibility—it's a priority. Here, you will find more than just a
            job; you will discover a pathway to expand your skills, connect with
            mentors, and achieve your career aspirations. With a strong focus on
            <span className="text-blue-600">
              Career Advancement, Professional Development
            </span>{" "}
            and <span className="text-blue-600">Continuous Learning</span> our
            community is dedicated to fostering your journey forward.
          </p>
          <h3 className="text-blue-600 font-semibold text-3xl pb-4">
            Join Us to Unlock Opportunities
          </h3>
          <p className="text-lg font-semibold text-white">
            From training programs to collaborative projects, we provide the
            resources and support you need to thrive and make an impact in your
            field. Step into a future with Anchor Informatics and lets grow
            together.
          </p>
        </div>
        <Image
          src={"/career-growth.png"}
          alt={"Career growth at Anchor Informatics"}
          width={500}
          height={500}
          className="w-full rounded-md"
        />
      </div>
    </div>
  );
};

export default CareersGrowth;
