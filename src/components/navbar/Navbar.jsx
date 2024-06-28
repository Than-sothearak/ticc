"use client";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pathName, setPathName] = useState("/");


  const links = [
    { url: "/", title: "Home" },
    { url: "/information", title: "Inforamtion & Schedule" },
    { url: "/fqa", title: "FQA" },
    { url: "/past-event", title: "Past Event" },
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

  return (
    <div className="text-white bg-[#0f51a1]/85 fixed z-10 w-full flex items-center justify-between px-6 py-4 text-sm">
     
      {/* MANIN LOGO */}
      <div>
        <Link
          href={"/"}
          className="rounded-md flex items-center justify-center gap-2"
        >
          <Image 
        src="/images/logo02.png" 
        alt="Example Image" 
        width={136}
        height={300} 
      />
          
        </Link>
      </div>
      {/* LINKS LISTS */}
      <div className="hidden md:flex">
        {/* SMOOTH SCROLL */}
        <ul
          className="flex gap-4"
          onClick={(e) => {
            e.preventDefault();
            const target = e.target;
            setPathName(target.getAttribute("href"));
            const id = target.getAttribute("href")?.replace("#", "");
            const element = document.getElementById(id);

            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              className={`${
                pathName === link.url && "bg-[#FF9A00] text-white"
              } px-2 py-1 rounded-md`}
            >
              {link.title}
            </Link>
          ))}
        </ul>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        <button
          className="relative z-50"
          onClick={(e) => setIsOpen((prev) => !prev)}
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
              <MdMenu size={28} color="white" />
            </motion.div>
          )}
        </button>
        {/* MENU LIST */}

        <motion.div
          variants={listVariants}
          initial="closed"
          animate={isOpen ? "opened" : "closed"}
          className="absolute z-20 top-0 left-0 w-full bg-[#0f51a1] text-white flex flex-col justify-center items-center gap-8 text-4xl text-center"
        >
          {links.map((link, index) => (
            <motion.div
              onClick={(e) => setIsOpen((prev) => !prev)}
              key={index}
              variants={listItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      </div>


    </div>
  );
};

export default Navbar;
