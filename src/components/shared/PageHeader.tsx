import React from "react";

const PageHeader = ({ label }: { label: string }) => {
  return <p className="text-5xl text-center font-semibold pb-12">{label}</p>;
};

export default PageHeader;
