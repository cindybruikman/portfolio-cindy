import Link from "next/link";
import React from "react";

const ButtonSecondary = ({ children, url }) => {
  return (
    <Link href={url ? url : "#"} legacyBehavior>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-size-15 font-medium text-primary-color hover:text-body-color capitalize py-17px px-35px bg-200 bg-transparent hover:bg-primary-color rounded-full leading-1 border border-primary-color text-nowrap tracking-1px"
      >
        {children}
      </a>
    </Link>
  );
};

export default ButtonSecondary;
