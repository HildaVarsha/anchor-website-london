import React from "react";
import { PageHeader } from "../shared";
import { Card } from "../ui";

const cardData = [
  {
    id: "01",
    bgColor: "bg-blue-900",
    title: "Driving Business Transformation",
    content:
      "As consumer demands grow and AI reshapes industries, self-optimizing systems are becoming essential. In the fast-paced post-digital era, the need for accelerated business change has never been greater. We meet clients wherever they are in their transformation journey, across sectors and regions, to co-create sustainable value and future-proof their businesses.",
  },
  {
    id: "02",
    bgColor: "bg-blue-500",
    title: "Commitment to Integrity",
    content:
      "We are dedicated to creating a prosperous future for all by standing against racism, emphasizing environmental sustainability, and fostering creativity to drive long-term growth. Our efforts focus on building a more inclusive, sustainable world.",
  },
  {
    id: "03",
    bgColor: "bg-blue-900",
    title: "Building a Future Together",
    content:
      "We inspire trust through our actions, cultivating an ethical community where everyone can succeed. With a strong history of corporate governance, we are committed to practices that benefit both our business and shareholders.",
  },
];

const AboutWorkingProcess = () => {
  return (
    <div className="py-12 container mx-auto px-4 md:px-0">
      <p className="text-xs text-center pb-4">--- Work Progress ---</p>
      <div className="max-w-lg mx-auto">
        <PageHeader
          label="Our Working Process How We Do"
          className="text-center"
        />
      </div>

      <div className="py-4 flex flex-col md:flex-row justify-between gap-12">
        {cardData.map(({ id, bgColor, title, content }) => (
          <Card key={id} className={`p-5 ${bgColor} w-full`}>
            <p className="font-light text-5xl text-white">{id}</p>
            <p className="text-xl font-semibold text-white py-4">{title}</p>
            <p className="text-white">{content}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AboutWorkingProcess;
