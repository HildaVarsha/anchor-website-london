import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui";

const TopNavbar = () => {
  return (
    <div className="shadow border-b border-blue-50 top-0 fixed w-full bg-white z-50">
      <div className="flex items-center justify-between py-4 container mx-auto">
        <Image
          src={"/logo.png"}
          alt={"Anchor Informatics"}
          width={200}
          height={100}
        />
        <div className="flex items-center gap-5 font-medium">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/" className="hover:text-blue-600">
            Services
          </Link>
          <Link href="/" className="hover:text-blue-600">
            Careers
          </Link>
          <Link href="/" className="hover:text-blue-600">
            Contact
          </Link>
          <Button>Get In Touch</Button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
