import { Footer, PageHeader } from "@/components/shared";
import { TermsBanner } from "@/components/terms";
import Link from "next/link";
import React from "react";

const Privacy = () => {
  return (
    <>
      <TermsBanner label={"Privacy Policy"} />
      <div className="py-12 container mx-auto px-4 md:px-0">
        <PageHeader label="Privacy Policy" />
        <p className="text-sm">
          The Privacy Policy outlines how Anchor Informatics collects, uses, and
          protects user personal information. Suggested Sections:
        </p>
        <li className="py-4">
          <strong className="text-blue-600">Information Collection: </strong>
          Explain what data you collect (e.g., name, email, IP address).
        </li>
        <li>
          <strong className="text-blue-600">Use of Information:</strong>{" "}
          Describe how the data is used, like for improving services or
          communication.
        </li>
        <li className="py-4">
          <strong className="text-blue-600">Data Security:</strong>
          Mention security measures in place to protect user data.
        </li>
        <li>
          <strong className="text-blue-600"> Third-Party Sharing:</strong>{" "}
          Explain if you share data with third parties and for what purposes.
        </li>
        <li className="py-4">
          <strong className="text-blue-600"> Cookies:</strong>Specify if cookies
          are used to improve user experience.
        </li>
        <li className="pb-4">
          <strong className="text-blue-600"> User Rights:</strong> Inform users
          of their rights regarding their data, such as the right to access,
          modify, or delete it.
        </li>
        <li className="pb-4">
          <strong className="text-blue-600"> Contact Information:</strong>{" "}
          Provide a way for users to reach out with privacy concerns.
        </li>
        <div className="flex items-center justify-center">
          <Link href="/" className="py-4">
            I have read the privacy policy
            <strong className="text-blue-600  underline pl-2">Go Home</strong>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
