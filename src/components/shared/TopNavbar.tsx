"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui";
import { usePathname, useRouter } from "next/navigation";

const TopNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (path: string) => {
    const defaultClass = "hover:text-blue-600";
    const activeClass = "text-blue-600 hover:text-blue-900";
    return path === pathname ? `${defaultClass} ${activeClass}` : defaultClass;
  };
  return (
    <div className="shadow border-b border-blue-50 top-0 fixed w-full bg-white z-50">
      <div className="flex items-center justify-center md:justify-between py-4 md:py-6 container mx-auto">
        <Image
          src={"/logo.png"}
          alt={"Anchor Informatics"}
          width={200}
          height={100}
        />
        <div className="hidden md:flex items-center gap-5 font-medium">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>
          <Link href="/about-us" className={isActive("/about-us")}>
            About
          </Link>
          <Link href="/services" className={isActive("/services")}>
            Services
          </Link>
          <Link href="/careers" className={isActive("/careers")}>
            Careers
          </Link>
          <Link href="/contact-us" className={isActive("/contact-us")}>
            Contact
          </Link>
          <Button onClick={() => router.push("/contact-us")}>
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
