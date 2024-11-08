"use client";
import { Bolt, Cable, Home, IdCard, TabletSmartphone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui";
import { usePathname } from "next/navigation";

const BottomNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="py-6 px-2 bottom-0 fixed w-full bg-white flex items-center justify-between gap-2">
      <Button
        className="h-12 px-2"
        variant={pathname == "/" ? "default" : "secondary"}
      >
        <Link href={"/"} className="text-xs flex flex-col items-center gap-1">
          <Home />
          Home
        </Link>
      </Button>
      <Button
        className="h-12 px-2"
        variant={pathname == "/about-us" ? "default" : "secondary"}
      >
        <Link
          href={"/about-us"}
          className="text-xs flex flex-col items-center gap-1"
        >
          <Bolt />
          About
        </Link>
      </Button>
      <Button
        className="h-12 px-2"
        variant={pathname == "/services" ? "default" : "secondary"}
      >
        <Link
          href={"/services"}
          className="text-xs flex flex-col items-center gap-1"
        >
          <TabletSmartphone />
          Services
        </Link>
      </Button>
      <Button
        className="h-12 px-2"
        variant={pathname == "/careers" ? "default" : "secondary"}
      >
        <Link
          href={"/careers"}
          className="text-xs flex flex-col items-center gap-1"
        >
          <IdCard />
          Career
        </Link>
      </Button>
      <Button
        className="h-12 px-2"
        variant={pathname == "/contact-us" ? "default" : "secondary"}
      >
        <Link
          href={"/contact-us"}
          className="text-xs flex flex-col items-center gap-1"
        >
          <Cable />
          Contact
        </Link>
      </Button>
    </div>
  );
};

export default BottomNavbar;
