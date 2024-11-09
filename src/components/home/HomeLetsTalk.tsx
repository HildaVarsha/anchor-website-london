import React from "react";
import { Button, Card } from "../ui";
import Image from "next/image";
import { ContactIcon, MailIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "../shared";

const HomeLetsTalk = () => {
  return (
    <div className="py-12 container mx-auto px-4 md:px-0">
      <PageHeader label="Let’s Talk" className="text-center" />
      <Card className="p-5 flex items-center gap-4">
        <Button variant={"secondary"} className="h-24 hidden md:block">
          <Image
            src={"/lets-talk.png"}
            alt={"Lets Talk"}
            width={40}
            height={40}
            className="h-16 w-16 p-2"
          />
        </Button>
        <div>
          <div className="flex items-center gap-2 pb-4">
            <PhoneCallIcon className="w-4 h-4" />
            <p>+44 7438 846089</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-2">
              <MailIcon className="w-4 h-4" />
              <Link
                href={
                  "mailto:rafi@anchorinformatics.co.uk?subject=Hello Rafi&body=Hi I am XXX"
                }
              >
                {" "}
                rafi@anchorinformatics.co.uk
              </Link>
            </div>
            <span className="hidden md:block">|</span>
            <div className="flex items-center gap-2">
              <ContactIcon className="w-4 h-4" />
              <Link
                href={
                  "mailto:contact@anchorinformatics.co.uk?subject=Hello Rafi&body=Hi I am XXX"
                }
              >
                contact@anchorinformatics.co.uk
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HomeLetsTalk;
