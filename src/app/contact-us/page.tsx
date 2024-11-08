import {
  ContactBanner,
  ContactFooter,
  ContactGetInTouch,
} from "@/components/contactUs";
import React from "react";

const ContactUs = () => {
  return (
    <div className="h-full w-full bg-blue-100">
      <ContactBanner />
      <ContactGetInTouch />
      <ContactFooter />
    </div>
  );
};

export default ContactUs;
