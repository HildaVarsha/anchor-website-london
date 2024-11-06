import Image from "next/image";
import React from "react";
import { PageHeader } from "../shared";
import { Card } from "../ui";

const HomeWhatWeDo = () => {
  return (
    <div className="bg-blue-950 py-16">
      <div className="container mx-auto flex items-stretch  gap-12">
        <Image
          src={
            "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt={"What we do"}
          width={100}
          height={100}
          objectFit="cover"
          className="rounded-md w-full"
        />
        <div className="w-full">
          <PageHeader
            label="What We Do Best"
            className="text-white text-left"
          />
          <p className="text-white">
            <strong>
              Design & Development of Future-Ready Digital Products
            </strong>{" "}
            We are more than a digital agency—we are innovators. As part of the
            <strong>Anchor Informatics Innovation Network</strong>, we help
            global organizations solve their toughest challenges. With{" "}
            <strong>300+ expert researchers</strong> across
            <strong>20 countries</strong>, our data-driven insights shape the
            trends of tomorrow. We publish hundreds of papers annually, pushing
            the boundaries of what’s possible.
          </p>
          <div className="pt-8 flex items-center gap-12">
            <Card className="p-8">
              <p className="text-2xl text-blue-600 pb-4 text-center">
                Our Vision
              </p>
              <p className="text-sm">
                To drive global digital transformation through innovative,
                sustainable, and ethically driven solutions that shape the
                future of business.
              </p>
            </Card>
            <Card className="p-8">
              <p className="text-2xl text-blue-600 pb-4 text-center">
                Our Goal
              </p>
              <p className="text-sm">
                To accelerate technology adoption, foster creativity, and drive
                lasting growth with innovative digital strategies and
                data-driven insights.t
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhatWeDo;
