import Link from "next/link";
import React from "react";

export const ApplyButton = ({ link, variant = "primary" }) => {
  const variants = {
    primary: `
      bg-primary text-white
      hover:bg-secondary hover:text-primary
    `,
    onPrimary: `
      bg-white text-primary
      hover:bg-secondary hover:text-white
    `,
  };

  return (
    <Link
      href={link}
      className={`
        inline-block px-6 py-3 font-semibold rounded-md
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-xl
        active:scale-95
        ${variants[variant]}
      `}
    >
      Apply Now
    </Link>
  );
};
