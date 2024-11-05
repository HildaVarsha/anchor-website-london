import React from "react";
import { PageHeader } from "../shared";
import { Card } from "../ui";
import Image from "next/image";

const HomeOurExpertise = () => {
  const ExpertiseCard = ({
    imageSrc,
    title,
    description,
    className,
  }: {
    imageSrc: string;
    title: string;
    description: string;
    className?: string;
  }) => {
    return (
      <Card className={`bg-blue-50 p-8 border-blue-100 ${className}`}>
        <div className="p-4 bg-white w-24 h-24 rounded-md">
          <Image src={imageSrc} alt={title} width={150} height={150} />
        </div>
        <p className="text-sm font-semibold pt-8">{title}</p>
        <div className="flex items-center gap-3 py-8">
          <p className="w-16 h-2 rounded-full bg-blue-600"></p>
          <p className="w-8 h-2 rounded-full bg-blue-600"></p>
        </div>
        <p className="font-light">{description}</p>
      </Card>
    );
  };
  return (
    <div className="pb-12  container mx-auto">
      <PageHeader label="Our Expertise—Your Edge" />
      <div className="flex items-stretch justify-between gap-12">
        <ExpertiseCard
          imageSrc={"/expertise-saas.png"}
          title={" SaaS (Software as a Service)"}
          description={
            " Powering the future of work with cloud-based solutions, giving you seamless access to software resources."
          }
        />
        <ExpertiseCard
          imageSrc={"/expertise-ai.png"}
          title={" AI (Artificial Intelligence)"}
          description={
            " From machine learning to natural language processing, we unlock the full potential of AI to help machines think, act, and improve."
          }
        />
        <ExpertiseCard
          imageSrc={"/expertise-rcs.png"}
          title={" RCS (Resilient Cyber Sector)"}
          description={
            " Our “bend but don’t break” approach ensures your enterprise remains secure, resilient, and prepared for any disruption."
          }
        />
      </div>
    </div>
  );
};

export default HomeOurExpertise;
