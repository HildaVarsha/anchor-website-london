import React from "react";
import { PageHeader } from "../shared";
import { Card } from "../ui";
import Image from "next/image";

const cardItems = [
  "People Centricity",
  "Back To Work",
  "Work-Life Balance",
  "Recognition & Rewards",
  "Empowerment & Nurturing",
];

const CareersLife = () => {
  return (
    <div className="py-12 container mx-auto px-4 md:px-0">
      <div className="w-full flex flex-col md:flex-row gap-12">
        <Image
          src="https://images.pexels.com/photos/776615/pexels-photo-776615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Career"
          width={500}
          height={500}
          className="w-full object-cover rounded-md"
        />
        <div className="w-full">
          <PageHeader
            label="Your life at Anchor Informatics"
            className="pb-4"
          />
          <p className="font-semibold text-lg">
            Find your favorite job with no pain and no gain
          </p>
          <div className="w-full pt-8 flex flex-wrap gap-8 justify-center">
            {cardItems.map((item, index) => (
              <Card
                key={index}
                className="p-4 h-48 w-40 bg-blue-950 flex items-center justify-center text-center mb-2"
              >
                <p className="text-lg font-semibold text-white">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersLife;
