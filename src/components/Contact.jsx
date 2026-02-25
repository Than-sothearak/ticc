import React from "react";
import { FaFacebook, FaPhoneAlt, FaTelegram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import FadeUp from "./motion/FadeUp";

const Contact = () => {
  return (
    <section className="container mx-auto px-6 py-20" id="contact">
      {/* Title */}
      <FadeUp>
        <h1 className="text-center font-extrabold text-4xl md:text-5xl tracking-tight">
          Contact
        </h1>
      </FadeUp>

      <div className="mt-20 gap-20">
        {/* Left Side */}
        <FadeUp>
          <div className="">
            {/* Contact Items */}
            <div className="flex items-center max-md:flex-wrap gap-16">
              <div className="w-full space-y-4">
                <div>
                  <h5 className="text-xl font-semibold text-blue-700">
                    Contact Us
                  </h5>
                </div>
                {/* Facebook */}

                <a
                  href="https://www.facebook.com/innovationchallengecambodia/"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-blue-100 text-[#1877F2] group-hover:scale-110 transition">
                    <FaFacebook size={22} />
                  </div>

                  <div className="">
                    <h1 className="font-bold">Fecebook page</h1>
                    <span className="hover:underline">
                      Techno Innovation Challenge Cambodia
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div className="">
                    <h1 className="font-bold">Phone number</h1>
                    <span className="">(+855) 86 643 253 | 11 740 773</span>
                  </div>
                </div>

                {/* Telegram */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                    <FaTelegram size={22} />
                  </div>
                  <div className="">
                    <h1 className="font-bold">Telegram</h1>
                    <p>(+855) 11 740 773</p>
                  </div>
                </div>

                {/* Location */}
                <a
                  href="https://www.google.com/maps/dir//Institute+of+Technology+of+Cambodia"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                    <FaLocationDot size={22} />
                  </div>
                   <div className="">
                    <h1 className="font-bold">Institute of Technology of Cambodia</h1>
                    <span className="underline-offset-4 group-hover:underline">  Russian Federation
                    Blvd., Sangkat Teuklaak 1, Khan Toul Kork, 120404, Phnom
                    Penh, Cambodia</span>
                  </div>
               
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-lg border max-lg:w-full w-1/2 h-full">
                <iframe
                  width="100%"
                  height="280"
                  loading="lazy"
                  className=" transition"
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Institute%20of%20Technology%20of%20Cambodia&z=15&output=embed"
                />
              </div>
            </div>

            {/* Map */}
          </div>
        </FadeUp>

        <FadeUp>
          <div className="mt-28 flex justify-center gap-6 max-md:block max-md:space-y-10 h-full">
            {/* Facilitator */}
            <div className="rounded-2xl transition h-full">
              <h5 className="text-xl font-semibold text-blue-700 mb-4">
                Project manager
              </h5>
              <div className="space-y-1">
                <h2 className="font-bold text-lg">Mr. LAY Heng</h2>
                <p className="text-sm text-gray-600">
                  Dean of Faculty of Electronic Engineering
                </p>

                <p className="text-sm  font-bold text-black">
                  Institute of Technology of Cambodia
                </p>
              </div>
            </div>

            <div className="w-px bg-gray-600 max-md:hidden"></div>

            {/* Coordinator */}
            <div className="rounded-2xl transition h-full">
              <h5 className="text-xl font-semibold text-blue-700 mb-4">
                Coordinator
              </h5>
              <div className="space-y-1">
                <h2 className="font-bold text-lg">Ms. SREY Sokhom</h2>
                <p className="text-sm text-gray-600">Project Facilitator</p>

                <p className="text-sm  font-bold text-black">
                  Institute of Technology of Cambodia
                </p>
              </div>
            </div>

            <div className="w-px bg-gray-600 max-md:hidden"></div>

            {/* Coordinator */}
            <div className="rounded-2xl  transition h-full">
              <h5 className="text-xl font-semibold text-blue-700 mb-4">
                Coordinator
              </h5>
              <div className="space-y-1">
                <h2 className="font-bold text-lg">Mr. THAN Sothearak</h2>
                <p className="text-sm text-gray-600">Project Facilitator</p>

                <p className="text-sm  font-bold text-black">
                  Institute of Technology of Cambodia
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Contact;
