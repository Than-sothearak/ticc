"use client";
import React, { useState } from "react";
import {
  MdMenu,
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardArrowRight,
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
    },
    {
      url: "/fqa",
      title: "FAQ",
    },
    {
      url: "/past-event",
      title: "Past Event",
      sublist: [
        {
          url: "/past-event/news",
          title: "Techno Pre-Incubation",
          sublist2: [
            {
              url: "/past-event/news",
              title: "Program 2023",
            },
            {
              url: "/past-event/news",
              title: "Program 2024",
            },
          ],
        },
        {
          url: "/past-event/more-event",
          title: "Techno Innovation Challenge Cambodia",
          sublist2: [
            {
              url: "/past-event/news",
              title: "Application 2023",
            },
            {
              url: "/past-event/news",
              title: "Application 2024",
            },
            {
              url: "/past-event/news",
              title: "Application 2025",
            },
          ],
        },
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
  const handleclick = () => {
    setIsOpen((prev) => !prev);
    setOpenSublist(null);
  };
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
                className="relative w-full text-center uppercase group/sidebar"
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
                  <div className="absolute w-full flex-col bg-white shadow-lg shadow-black-/90 z-10 hidden group-hover/sidebar:flex">
                    <div className="absolute top-0 w-full border-2 border-blue-600 "></div>

                    {link.sublist.map((sublink) => (
                      <div
                        key={sublink.title}
                        className="relative flex h-16 justify-around items-center group/navitem"
                      >
                        <div className="flex justify-between items-center w-full">
                          <Link
                            href={sublink.url}
                            className="hover:text-blue-700 w-full text-center"
                          >
                            {sublink.title}
                          </Link>
                          {sublink.sublist2 && (
                            <MdKeyboardArrowRight size={28} />
                          )}
                        </div>

                        {sublink.sublist2 && (
                          <div className="absolute left-full top-4 w-full flex-col items-center bg-white shadow-lg shadow-black-/90 z-10 hidden group-hover/navitem:flex">
                            <div className="absolute top-0 w-full border-2 border-blue-600 "></div>
                            {sublink.sublist2.map((s2) => (
                              <div
                                key={sublink.title}
                                className="relative w-full flex h-16 justify-around items-center"
                              >
                                <Link
                                  key={s2.title}
                                  href={s2.url}
                                  className="hover:text-blue-700 w-full text-center py-1"
                                >
                                  {s2.title}
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
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
            onClick={handleclick}
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
                    <button
                      className="text-2xl"
                      onClick={(e) => handleSublistToggle(e, index)}
                    >
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
                    className="w-full bg-[#0f51a1] text-white flex flex-col items-center justify-center"
                  >
                    {link.sublist.map((sublink) => (
                      <div key={sublink.title} className="flex flex-col justify-center items-center">
                        <Link
                          href={sublink.url}
                          className="hover:text-blue-300 py-2 w-full text-center text-md"
                        >
                          {sublink.title}
                        </Link>
                        {sublink.sublist2.map((s2) => (
                          <div key={s2.title}>
                            <Link
                              href={s2.url}
                              className="hover:text-blue-300 py-2 w-full text-center text-sm"
                            >
                              {s2.title}
                            </Link>
                          </div>
                        ))}
                      </div>
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
