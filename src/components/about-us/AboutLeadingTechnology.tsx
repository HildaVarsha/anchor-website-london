import Image from "next/image";
import React from "react";
import { PageHeader } from "../shared";

const AboutLeadingTechnology = () => {
  return (
    <div className="py-12 container mx-auto flex  gap-12">
      <div className="w-full relative">
        <Image
          src={
            "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt={"Leading Workers"}
          width={350}
          height={350}
          className="rounded-lg"
        />
        <Image
          src={
            "https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt={"Leading Workers"}
          width={350}
          height={350}
          className="rounded-lg absolute bottom-4 right-4 border-4 border-stone-200"
        />
      </div>
      <div className="w-full">
        <PageHeader
          label="We're leading The
Power Of Technology"
        />
        <p className="py-4">
          As part of the Innovation Network at AnchorInformatics, our research
          team is at the forefront of shaping trends and providing data-driven
          strategic leadership on the key challenges faced by global
          organizations. Leveraging cutting-edge analytical methods and deep
          market expertise, our team of 300 researchers and analysts spans 20
          countries, publishing hundreds of papers, articles, and perspectives
          each year. Through thought-provoking analyses supported by proprietary
          data and collaborations with prestigious institutions like MIT and
          Harvard Business School, we transform insights and innovative ideas
          into practical solutions for our clients.
        </p>
        <div className="flex items-center gap-12">
          <li>Best IT Solutions & Service</li>
          <li>Always Latest Technology</li>
        </div>
        <div className="py-4 flex items-center gap-12">
          <li>24 Hour's Customer Service</li>
          <li>Always Latest Technology</li>
        </div>
      </div>
    </div>
  );
};

export default AboutLeadingTechnology;
