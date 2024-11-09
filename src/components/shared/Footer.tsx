import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const links = ["Home", "About", "Services", "Career", "Contact Us"];
  const phoneNumbers = [
    { label: "+44 7438 846089", href: "tel:+447438846089" },
    { label: "+020 3490 9639", href: "tel:+02034909639" },
  ];
  const emails = [
    {
      label: "rafi@anchorinformatics.co.uk",
      href: "mailto:rafi@anchorinformatics.co.uk",
    },
    {
      label: "contact@anchorinformatics.co.uk",
      href: "mailto:contact@anchorinformatics.co.uk",
    },
  ];
  const SocialLinks = () => {
    return (
      <div className="bg-white flex items-center justify-between py-4 container mx-auto px-4 md:px-0">
        <p className="text-sm font-semibold">Anchor Informatics Pvt Ltd</p>
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Facebook className="text-blue-400" />
          </Link>
          <Link href={"/"}>
            <Image
              src={"/twitter.png"}
              alt="twitter"
              width={16}
              height={16}
              className="text-black"
            />
          </Link>
          <Link href={"/"}>
            <Linkedin className="text-[#007EBB]" fill="#007EBB" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="py-12 bg-blue-950 sticky w-full">
        <div className="container mx-auto">
          <Image
            src="/logo.png"
            alt="Anchor Informatics Pvt Ltd"
            width={200}
            height={200}
            objectFit="cover"
          />

          <div className="py-4 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 px-4 md:px-0">
            <div className="flex flex-row items-center md:items-start md:flex-col w-full gap-4 md:gap-0">
              <div>
                <Image
                  src="/call-us.png"
                  alt="Call Us"
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-lg pt-4 font-semibold text-white pb-2">
                  Call Us
                </p>
                {phoneNumbers.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-xs md:text-sm text-white py-2"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-row items-center md:items-start md:flex-col w-full gap-4 md:gap-0">
              <div>
                <Image
                  src="/write-us.png"
                  alt="Write Us"
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-lg pt-4 font-semibold text-white pb-2">
                  Write Us
                </p>
                {emails.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-xs md:text-sm text-white py-2"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-row md:flex-col flex-wrap gap-4 w-full">
              {links.map((link) => (
                <Link key={link} href="/" className="text-sm text-white">
                  {link}
                </Link>
              ))}
            </div>

            <div className="w-full">
              <p className="text-white text-xl font-semibold pb-4">
                Reach out with any questions you have.
              </p>
              <p className="text-xs text-white">
                We are here to help and answer any question you might have. We
                look forward to hearing from you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SocialLinks />
    </>
  );
};

export default Footer;
