import React from "react";
import { FaFacebook, FaPhoneAlt, FaTelegram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import FadeUp from "./motion/FadeUp";

const Contact = () => {
  return (
    <div className="container py-16 px-10">
      {/* Title */}
      <FadeUp>
        <h1 className="font-bold text-[2.986rem] leading-tight text-center">
          Contact
        </h1>
      </FadeUp>

      <div className="flex flex-col gap-16 lg:gap-36 lg:flex-row mt-16">
        {/* Left side */}
        <FadeUp className="container p-0">
          <div className="mb-10 flex flex-col gap-4">
            <h5 className="font-bold text-[1.44rem] text-blue-800">
              Contact us
            </h5>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <FaFacebook size={28} className="text-[#1877F2]" />
                <a
                  className="underline"
                  href="https://www.facebook.com/innovationchallengecambodia/"
                >
                  Techno Innovation Challenge Cambodia
                </a>
              </div>

              <div className="flex gap-4 items-center underline">
                <FaPhoneAlt size={28} className="text-blue-500" />
                <p className="font-bold">
                  (+855) 86 643 253 | 11 740 773
                </p>
              </div>

              <div className="flex gap-4 items-center underline">
                <FaTelegram size={28} className="text-blue-500" />
                <p>(+855) 11 740 773</p>
              </div>

              <div className="flex gap-4 items-center underline">
                <FaLocationDot size={28} className="text-blue-500" />
                <a
                  className="underline"
                  href="https://www.google.com/maps/dir//Institute+of+Technology+of+Cambodia"
                >
                  Institute of Technology of Cambodia
                </a>
              </div>

              {/* Map */}
          <div className="border rounded-lg">
                <iframe
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Institute%20of%20Technology%20of%20Cambodia&z=15&output=embed"
              />
          </div>
            </div>
          </div>
        </FadeUp>

        <div className="border" />

        {/* Right side */}
        <FadeUp className="flex-row lg:flex-col w-full flex gap-16 md:gap-20">
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-[1.44rem] text-blue-800">
              Facilitator
            </h5>
            <div className="flex flex-col">
              <h2 className="font-bold">Mr. LAY Heng</h2>
              <p>Dean of Faculty of Electronic Engineering</p>
              <p>Director of Cyber University and Multimedia Center</p>
              <p>Institute of Technology of Cambodia</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-[1.44rem] text-blue-800">
              Coordinator
            </h5>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold">Ms. SREY Sokhom</h2>
              <h2 className="font-bold">Mr. THAN Sothearak</h2>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
};

export default Contact;
