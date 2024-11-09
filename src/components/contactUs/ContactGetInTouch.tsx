import React from "react";
import { Button, Card } from "../ui";
import { PageHeader } from "../shared";
import Link from "next/link";
import Image from "next/image";
import ContactUsForm from "./ContactUsForm";

const ContactGetInTouch = () => {
  return (
    <div className="py-12 px-4 md:px-0 bg-blue-950 w-full h-full">
      <p className="text-sm text-white font-semibold text-center pb-2">
        Get In Touch
      </p>
      <PageHeader label="Hey!Lets Talk" className="text-white text-center" />
      <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-between gap-12 h-full">
        <div className="w-full md:w-[60%] h-full">
          <ContactUsForm />
        </div>
        <div className="w-full md:w-[40%] h-full">
          <Card className="rounded-md p-8 h-full">
            <div className="flex flex-col md:flex-row  text-center md:text-start items-center gap-8 mb-8">
              <Button className="h-20 w-20 bg-stone-100 text-blue-600 ">
                <Image
                  src={"/contact-call.png"}
                  alt="Contact Us"
                  width={32}
                  height={32}
                />
              </Button>
              <div>
                <p className="font-bold text-xl text-blue-900 pb-1">
                  Call Anytime
                </p>
                <Link href={"tel:+447438846089"}>Mobile:+44 7438 846089</Link>
                <div>
                  <Link href={"tel:+02034909639"}>Landline:+020 3490 9639</Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  text-center md:text-start items-center gap-8 mb-8">
              <Button className="h-20 w-20 bg-stone-100 text-blue-600 ">
                <Image
                  src={"/contact-email.png"}
                  alt="Contact Us"
                  width={32}
                  height={32}
                />
              </Button>
              <div>
                <p className="font-bold text-xl text-blue-900 pb-1">
                  Send Email
                </p>
                <Link href={"mailto:rafi@anchorinformatics.co.uk"}>
                  Email:rafi@anchorinformatics.co.uk
                </Link>
                <div>
                  <Link href={"mailto:contact@anchorinformatics.co.uk"}>
                    Enquiry:contact@anchorinformatics.co.uk
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  text-center md:text-start items-center gap-8 mb-8">
              <Button className="h-20 w-28 bg-stone-100 text-blue-600 ">
                <Image
                  src={"/contact-map.png"}
                  alt="Contact Us"
                  width={32}
                  height={32}
                />
              </Button>
              <div>
                <p className="font-bold text-xl text-blue-900 pb-1">Visit Us</p>
                <Link href={"https://maps.app.goo.gl/FtDNDopyrnDSwoJWA"}>
                  Address:184 Heigham Road,London E62JH U.K.
                </Link>
                <div>
                  <Link href={"https://maps.app.goo.gl/gEMC5kPbprGZJDT1A"}>
                    Address:Vaishnavis
                    Cynosure,Gachibowli,Hyderabad,Telangana-500032
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <Button className="w-16 h-16">
                  <Image
                    src={"/linkedIn.png"}
                    alt="Linked In"
                    width={24}
                    height={24}
                  />
                </Button>
                <Button className="w-16 h-16">
                  <Image
                    src={"/instagram.png"}
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </Button>
                <Button className="w-16 h-16">
                  <Image
                    src={"/facebook.png"}
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                </Button>
                <Button className="w-16 h-16">
                  <Image
                    src={"/twitter-contact.png"}
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactGetInTouch;
