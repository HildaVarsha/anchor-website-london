import React from "react";
import { PageHeader } from "../shared";
import { Card } from "../ui";
import Image from "next/image";

const HomeOurServices = () => {
  const ServicesCard = ({
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
      <Card className={`bg-white shadow p-8 border-blue-100 ${className}`}>
        <div className="p-4 bg-blue-100 w-16 h-16 rounded-md">
          <Image src={imageSrc} alt={title} width={150} height={150} />
        </div>
        <p className="font-semibold pt-8">{title}</p>
        <div className="flex items-center gap-3 py-8">
          <p className="w-16 h-2 rounded-full bg-blue-600"></p>
          <p className="w-8 h-2 rounded-full bg-blue-600"></p>
        </div>
        <p className="font-medium text-sm">{description}</p>
      </Card>
    );
  };
  return (
    <div className="py-12 container mx-auto px-4 md:px-0">
      <PageHeader label={"Our Services"} className="text-center" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServicesCard
          imageSrc={"/services-web.png"}
          title={"Web Development & Redesinging"}
          description={
            "ECommerce, Blogs, Portfolio/Personal, Social Media, Wiki or community forum, Magazine and news media, Web portals, Video streaming, Membership,Donation/Ngo website"
          }
        />
        <ServicesCard
          imageSrc={"/services-design.png"}
          title={"Designing"}
          description={
            "Photoshop, Adobe InDesign, Inkscape, Sketch, CorelDraw,Adobe Illustrator,GIMP,Gravit Designer,Photoscape Etc."
          }
        />
        <ServicesCard
          imageSrc={"/services-digital.png"}
          title={"Digital Marketing"}
          description={
            "Social Media Marketing Platforms, Influencer Marketing, Email Marketing, Content Marketing, Search Engine Optimization (SEO) Marketing, Pay-per-click (PPC), Affiliate Marketing,Etc."
          }
        />
        <ServicesCard
          imageSrc={"/services-development.png"}
          title={"App Development"}
          description={
            "If you're currently working on an app, you'll need to decide what kind of app you want to produce. There will be some features that are best for one sort of software but not for another."
          }
        />
        <ServicesCard
          imageSrc={"/services-software.png"}
          title={"Software Development & Redevelopment"}
          description={
            "Data Science, Cloud Computing,Machine learning , Block Chain, Artificial Intelligence, Etc."
          }
        />
        <ServicesCard
          imageSrc={"/services-hoisting.png"}
          title={"Hosting Service"}
          description={
            "Shared hosting, VPS Hosting, Dadicate Hosting, Cloud Hosting, Domain, Email Service, Reseller Hosting, SSL,"
          }
        />
      </div>
    </div>
  );
};

export default HomeOurServices;
