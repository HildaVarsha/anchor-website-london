import Link from "next/link";
import React from "react";

const ContactFooter = () => {
  return (
    <div className="py-8 container mx-auto flex items-center flex-col md:flex-row justify-between">
      <p className="text-xs font-light">
        © 2024 Anchor Informatics. All rights reserved
      </p>
      <div className="flex items-center gap-4 pt-4 md:pt-0">
        <Link href={"/"} className="text-xs font-light">
          Terms & Condition
        </Link>
        <Link href={"/"} className="text-xs font-light">
          Privacy Policy
        </Link>
        <Link href={"/contact-us"} className="text-xs font-light">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ContactFooter;
