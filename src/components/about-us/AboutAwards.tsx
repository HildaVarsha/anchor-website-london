import React from "react";
import { Card } from "../ui";

const awardsData = [
  { title: "Winning Award", count: "75+" },
  { title: "Happy Clients", count: "500+" },
  { title: "Project Done", count: "560+" },
  { title: "Client Review", count: "500+" },
];

const AboutAwards = () => {
  return (
    <div className="py-12 container mx-auto px-4 md:px-0">
      <Card className="bg-blue-950 text-white py-12 px-16 flex flex-col md:flex-row items-center justify-between">
        {awardsData.map(({ title, count }, index) => (
          <div key={index} className="text-center">
            <p className="text-white font-medium text-xl">{title}</p>
            <p className="text-4xl font-light pt-3 text-green-400">{count}</p>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default AboutAwards;
