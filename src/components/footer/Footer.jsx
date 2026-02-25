import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 mt-28">
      <div className="w-full bg-gray-100 h-full">
        <div className="container items-stretch py-10 flex justify-center gap-10 max-lg:flex-col ">
          <div className="flex gap-4 w-full max-lg:justify-center h-full">
            <Link href="https://itc.edu.kh/" className="flex items-center">
              <Image
                src={"/images/itc.png"}
                alt="Logo"
                width={100}
                height={90}
              />
            </Link>
            <Link href="/" className="flex items-center">
              <Image
                src={"/images/logo.png"}
                alt="Logo"
                width={200}
                height={90}
              />
            </Link>
          </div>
          <div className="flex flex-col gap-4 items-stretch">
            <h1 className="text-3xl max-md:text-center">Learn more</h1>
            <div className="w-full gap-6 flex justify-between max-md:flex-wrap whitespace-nowrap  max-md:justify-center">
            <a
              href="/"
              className=" hover:underline h-full"
              aria-label="Home Link"
            >
              Home
            </a>
            <a
              href="/application"
              className=" hover:underline"
              aria-label="Home Link"
            >
              Applicaton
            </a>
            <a
              href="/information"
              className=" hover:underline"
              aria-label="Home Link"
            >
              Information and Schedule
            </a>
            <a
              href="/fqa"
              className=" hover:underline"
              aria-label="FAQ Link"
            >
              FAQ
            </a>
            <a
              href="/past-event"
              className="hover:underline"
              aria-label="Past Events Link"
            >
              Past Events
            </a>
            <a
              href="/mentors"
              className="hover:underline"
              aria-label="Mentor Link"
            >
              Mentor
            </a>
          </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col max-lg:flex-col-reverse md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left py-2">
          <h6 className="text-lg font-bold">
            Techno Innovation Challenge Cambodia
          </h6>
        </div>
        <div className="flex flex-col md:flex-row mt-4 md:mt-0 whitespace-nowrap">
          <p className="text-sm">© 2026 TICC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
