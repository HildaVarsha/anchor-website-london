import React from "react";
import { PageHeader } from "../shared";
import { Button } from "../ui";
import Image from "next/image";

const CareersJoinUs = () => {
  return (
    <div className="py-12 container mx-auto flex gap-12 justify-between w-full">
      <div className="w-full">
        <PageHeader label={"Join our team at Anchor  informatics"} />
        <Button className="bg-white rounded-full border border-blue-600 text-blue-600">
          See Openings
        </Button>
        <p className="font-medium pt-8">
          Join us and be part of a community where growth, support, and
          opportunity await you at every turn. Here, you will find like-minded
          individuals eager to connect, share insights, and learn together. As a
          member, you will gain exclusive access to resources, events, and
          expert guidance designed to help you achieve your goals. Whether you
          are looking to learn something new, expand your network, or just be
          part of a positive community, this is the place to make it happen.
          Join Now and start your journey with us!
        </p>
      </div>
      <div className="w-full">
        <Image
          src={
            "https://images.pexels.com/photos/4065133/pexels-photo-4065133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt={"Career"}
          width={400}
          height={400}
          objectFit="cover"
          className="rounded-md w-full"
        />
      </div>
    </div>
  );
};

export default CareersJoinUs;
