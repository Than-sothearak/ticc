import React from "react";
import { FaFacebook, FaPhoneAlt, FaTelegram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="container py-16 px-10">
      <h1 className="font-bold text-[2.986rem] leading-tight text-center">
        Contact
      </h1>

      <div className="flex flex-col gap-16 lg:gap-36 lg:flex-row mt-16">
        <div className="container">
          <div className="mb-10 flex flex-col gap-4">
            <h5 className="font-bold text-[1.44rem] text-blue-800">
              Contact us
            </h5>
            <div className="flex h-full flex-col gap-6">
              <div className="flex gap-4 items-center">
                <FaFacebook size={28} className="text-[#1877F2]" />
                <a
                  className="underline"
                  href="https://www.facebook.com/innovationchallengecambodia/"
                >
                  Techno Innovation Challenge Cambodia{" "}
                </a>
              </div>

              <div className="flex gap-4 items-center underline">
                <FaPhoneAlt size={28} className="text-blue-800" />
                <p className="font-bold"> (+855) 86 643 253 | 11 740 773</p>
              </div>

              <div className="flex gap-4 items-center underline">
                <FaTelegram size={28} className="text-[#0088cc]" />
                <p>(+855) 11 740 773</p>
              </div>
              <div className="flex gap-4 items-center underline">
                <FaLocationDot size={28} className="text-[#EA4335]" />
                <a
                  className="underline"
                  href="https://www.google.com/maps/dir//Institute+of+Technology+of+Cambodia+Russian+Conf+Norodom+Boulevard+Phnom+Penh+120404/@11.5703975,104.8980857,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3109517388680e15:0x63057e6682968f5"
                >
                  Institute of Technology of Cambodia
                </a>

                
              </div>
              <iframe
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Institute%20of%20Technology%20of%20Cambodia)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps trackers</a>
          </iframe>
            </div>
          </div>
        
         
        </div>
        <div className="border">

        </div>
        <div className="flex-row lg:flex-col w-full flex gap-16 md:gap-20">
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-[1.44rem] text-blue-800">
              Facilitator
            </h5>
            <div className="flex flex-col">
              <h2 className="font-bold ">Mr. LAY Heng</h2>
              <p>Dean of Faculty of Electronic Engigeering </p>
              <p>Director of Cyber University and Multimedia Center</p>
              <p>Institute of Technology of Cambodia</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-[1.44rem] text-blue-800">
              Coordinator
            </h5>
            <div className="flex h-full flex-col gap-4">
              <h2 className="font-bold ">Ms. SREY Sokhom</h2>
              <h2 className="font-bold ">Mr. THAN Sothearak</h2>
              <h2 className="font-bold ">Mr. KHEANG Hongly</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
