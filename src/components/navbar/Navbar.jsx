"use client";
import React, { useState } from "react";
import {
  MdMenu,
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSublist, setOpenSublist] = useState(null);
  const pathName = usePathname();

  const links = [
    { url: "/", title: "Home" },
    {
      url: "/information",
      title: "Information & Schedule",
      sublist: [
        { url: "/information", title: "Information & Schedule" },
        { url: "/information/news", title: "News" },
        { url: "/information/more-event", title: "More Event" },
      ],
    },
    {
      url: "/fqa",
      title: "FAQ",
      sublist: [
        { url: "/fqa", title: "News" },
        { url: "/faq/more-event", title: "More Event" },
      ],
    },
    {
      url: "/past-event",
      title: "Past Event",
      sublist: [
        { url: "/past-event/news", title: "News" },
        { url: "/past-event/more-event", title: "More Event" },
      ],
    },
    { url: "/mentors", title: "Mentors" },
  ];

  const listVariants = {
    closed: {
      height: 0,
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    opened: {
      height: "100vh",
      transition: {
        type: "spring",
        staggerChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const handleSublistToggle = (e, index) => {
    e.stopPropagation(); // Stop event propagation
    if (openSublist === index) {
      setOpenSublist(null);
    } else {
      setOpenSublist(index);
    }
  };
  const handleclick =  () => {
setIsOpen(false)
setOpenSublist(null)
 }
  return (
    <>
      <div className="mt-5">
        <Link
          href={"/"}
          className="rounded-md flex items-center justify-center gap-2"
        >
          <Image
            src="/images/logo.png"
            alt="Example Image"
            width={168}
            height={300}
          />
        </Link>
      </div>
      <div className="text-black/90 bg-white sticky top-0 z-10 w-full flex">
        {/* MAIN LOGO */}
        {/* Uncomment the following block if you want to display the logo */}

        {/* LINKS LIST */}
        <div className="w-full max-w-[1440px] m-auto hidden lg:block">
          <div className="flex h-[64px] items-center justify-center">
            {links.map((link) => (
              <div
                key={link.title}
                className="relative w-full text-center uppercase group"
              >
                <div
                  className={`flex justify-around items-center w-full h-16 ${
                    pathName === link.url && ""
                  } cursor-pointer hover:text-blue-700`}
                >
                  <Link href={link.url} className={``}>
                    {link.title}
                  </Link>
                  {link.sublist && (
                    <div className="h-full flex items-center">
                      <MdKeyboardArrowDown size={28} />
                    </div>
                  )}
                </div>
                {link.sublist && (
                  <div className="absolute w-full flex-col bg-white shadow-lg shadow-black-/90 z-10 hidden group-hover:flex ">
                    <div className="border-2 border-blue-600"></div>
                    {link.sublist.map((sublink) => (
                      <div
                        key={sublink.title}
                        className="flex justify-around items-center h-16"
                      >
                        <Link
                          href={sublink.url}
                          className="hover:text-blue-700 w-full text-center"
                        >
                          {sublink.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RESPONSIVE MENU */}
        <div className="lg:hidden">
          <button
            className="relative z-50 m-5"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <motion.div
                animate={{
                  rotate: isOpen ? 90 : 0,
                }}
              >
                <MdClose size={28} color="white" />
              </motion.div>
            ) : (
              <motion.div
                animate={{
                  rotate: isOpen ? 90 : 0,
                  transition: {
                    delay: 0.3,
                  },
                }}
              >
                <MdMenu size={28} color="black" />
              </motion.div>
            )}
          </button>
          {/* MENU LIST */}
          <motion.div
            variants={listVariants}
            initial="closed"
            animate={isOpen ? "opened" : "closed"}
            className="absolute z-20 top-0 left-0 w-full bg-[#0f51a1] text-white flex flex-col justify-center items-start gap-8 text-4xl"
          >
            {links.map((link, index) => (
              <div key={index} className="w-full">
                <motion.div
                  onClick={() => setIsOpen((prev) => !prev)}
                  variants={listItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex flex-col items-center"
                >
                  {link.sublist ? (
                    <p
                      onClick={(e) => handleSublistToggle(e, index)}
                      className="cursor-pointer"
                    >
                      {link.title}
                    </p>
                  ) : (
                    <Link href={link.url} onClick={() => setOpenSublist(null)}>
                      {link.title}
                    </Link>
                  )}

                  {link.sublist && (
                    <button className="text-2xl" onClick={(e) => handleSublistToggle(e, index)}>
                      {openSublist === index ? (
                        <MdKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </button>
                  )}
                </motion.div>
                {link.sublist && openSublist === index && (
                  <motion.div
                  onClick={handleclick}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="w-full bg-[#0f51a1] text-white flex flex-col items-center"
                  >
                    {link.sublist.map((sublink) => (
                      <Link
                      
                        key={sublink.title}
                        href={sublink.url}
                        className="hover:text-blue-300 py-2 w-full text-center text-sm"
                      >
                        {sublink.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
