import React from "react";
import { FaFacebook, FaPhoneAlt, FaTelegram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import FadeUp from "./motion/FadeUp";

const Contact = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      {/* Title */}
      <FadeUp>
        <h1 className="text-center font-extrabold text-4xl md:text-5xl tracking-tight">
          Contact
        </h1>
      </FadeUp>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side */}
        <FadeUp>
          <div className="space-y-10">
            <h5 className="text-xl font-semibold text-blue-700">
              Contact Us
            </h5>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/innovationchallengecambodia/"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-blue-100 text-[#1877F2] group-hover:scale-110 transition">
                  <FaFacebook size={22} />
                </div>
                <span className="font-medium underline-offset-4 group-hover:underline">
                  Techno Innovation Challenge Cambodia
                </span>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                  <FaPhoneAlt size={20} />
                </div>
                <p className="font-semibold">
                  (+855) 86 643 253 | 11 740 773
                </p>
              </div>

              {/* Telegram */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                  <FaTelegram size={22} />
                </div>
                <p>(+855) 11 740 773</p>
              </div>

              {/* Location */}
              <a
                href="https://www.google.com/maps/dir//Institute+of+Technology+of+Cambodia"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                  <FaLocationDot size={22} />
                </div>
                <span className="underline-offset-4 group-hover:underline">
                  Institute of Technology of Cambodia
                </span>
              </a>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl shadow-lg border">
              <iframe
                width="100%"
                height="350"
                loading="lazy"
                className=" transition"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Institute%20of%20Technology%20of%20Cambodia&z=15&output=embed"
              />
            </div>
          </div>
        </FadeUp>

        {/* Right Side */}
        <FadeUp>
          <div className="space-y-6">
            {/* Facilitator */}
            <div className="rounded-2xl border p-8 shadow-sm hover:shadow-md transition">
              <h5 className="text-xl font-semibold text-blue-700 mb-4">
                Project manager
              </h5>
              <div className="space-y-1">
                <h2 className="font-bold text-lg">Mr. LAY Heng</h2>
                <p className="text-sm text-gray-600">
                  Dean of Faculty of Electronic Engineering
                </p>
                <p className="text-sm text-gray-600">
                  Director of Cyber University and Multimedia Center
                </p>
                <p className="text-sm text-gray-600">
                  Institute of Technology of Cambodia
                </p>
              </div>
            </div>

            {/* Coordinator */}
            <div className="rounded-2xl border p-8 shadow-sm hover:shadow-md transition">
              <h5 className="text-xl font-semibold text-blue-700 mb-4">
                Coordinator
              </h5>
              <div className="space-y-2">
                <p className="font-bold">Ms. SREY Sokhom</p>
                <p className="font-bold">Mr. THAN Sothearak</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Contact;
