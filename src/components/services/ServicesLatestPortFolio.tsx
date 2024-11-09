import React from "react";
import { PageHeader } from "../shared";
import Image from "next/image";

const imageUrls = [
  "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/256302/pexels-photo-256302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const ServicesLatestPortFolio = () => {
  return (
    <div className="py-12 container mx-auto px-4 md:px-0">
      <PageHeader
        label="Latest completed tech Portfolio showcase"
        className="text-center max-w-lg mx-auto"
      />
      <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {imageUrls.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt="Technology"
            width={300}
            height={300}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesLatestPortFolio;
