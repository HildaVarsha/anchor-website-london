import React from "react";

const PageHeader = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <p className={`text-5xl  font-semibold pb-12 ${className}`}>{label}</p>
  );
};

export default PageHeader;
