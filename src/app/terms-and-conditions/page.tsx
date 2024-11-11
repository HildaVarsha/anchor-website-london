import { Footer, PageHeader } from "@/components/shared";
import { TermsBanner } from "@/components/terms";
import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div>
      <TermsBanner label={"Terms And Conditions"} />
      <div className="py-12 container mx-auto px-4 md:px-0">
        <PageHeader label="Terms and Conditions" />
        <p className="text-sm">
          The Terms and Conditions establish the rules users must follow when
          interacting with your website or services. Suggested Sections:
        </p>
        <li className="py-4">
          <strong className="text-blue-600">Acceptance of Terms: </strong>
          Clarify that by using the website, users agree to the terms.
        </li>
        <li>
          <strong className="text-blue-600">Intellectual Property:</strong>{" "}
          Specify that all content (text, images, designs) belongs to Anchor
          Informatics
        </li>
        <li className="py-4">
          <strong className="text-blue-600">Use of Services:</strong> Outline
          what is and is not allowed on the platform (e.g., no spamming, no
          unauthorized access).
        </li>
        <li>
          <strong className="text-blue-600"> Limitations of Liability:</strong>{" "}
          Outline Explain the extent of Anchor Informatics liability for
          potential issues.
        </li>
        <li className="py-4">
          <strong className="text-blue-600"> Governing Law:</strong> State the
          jurisdiction governing these terms, usually where your business is
          registered.
        </li>
        <li className="pb-4">
          <strong className="text-blue-600"> Modifications:</strong> Mention
          that terms can be updated and that users should review periodically.
        </li>
        <div className="flex items-center justify-center">
          <Link href="/" className="py-4">
            I have read the terms and conditions{" "}
            <strong className="text-blue-600  underline pl-2">Go Home</strong>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
