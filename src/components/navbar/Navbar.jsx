"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { url: "/", title: "Home" },
    { url: "/application", title: "Application" },
    { url: "/information", title: "Information & Schedule" },
    { url: "/fqa", title: "FAQ" },
    { url: "/past-event", title: "Past Event" },
    { url: "/mentors", title: "Mentors" },
  ];

  const isActive = (url) => pathname === url || pathname.startsWith(`${url}/`);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto flex items-center justify-between h-20 px-6 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={scrolled ? "/images/logo.png" : "/images/TICC_logo_white.png"}
            alt="Logo"
            width={168}
            height={50}
          />
        </Link>

        {/* Desktop Links */}
        <div
          className={`hidden lg:flex items-center gap-8 uppercase font-semibold ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {links.map((link) => {
            const active = isActive(link.url);

            return (
              <Link
                key={link.title}
                href={link.url}
                className={`px-3 py-1 rounded-md transition
                  ${active ? "bg-primary text-white" : "hover:opacity-80"}
                `}
              >
                {link.title}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className={`${scrolled ? "text-black" : "text-white"}`}
          >
            {isMobileOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-[#0f51a1] text-white flex flex-col overflow-hidden"
          >
            {links.map((link) => {
              const active = isActive(link.url);

              return (
                <Link
                  key={link.title}
                  href={link.url}
                  onClick={() => setIsMobileOpen(false)}
                  className={`px-6 py-4 border-b border-blue-700 transition
                    ${active ? "bg-white/20 font-bold" : "hover:bg-white/10"}
                  `}
                >
                  {link.title}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
