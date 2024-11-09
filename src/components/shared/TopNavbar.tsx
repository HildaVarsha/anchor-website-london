"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Dialog, DialogContent, DialogTrigger } from "../ui";
import { usePathname } from "next/navigation";
import { ContactUsForm } from "../contactUs";

const TopNavbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
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
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>
              {" "}
              <Button>Get In Touch</Button>
            </DialogTrigger>
            <DialogContent>
              <h1 className="text-lg text-center text-blue-600 font-semibold">
                Get In Touch With Us
              </h1>
              <ContactUsForm closeDialogue={handleClose} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
