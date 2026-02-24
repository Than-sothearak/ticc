"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const HeaderSectionComponent = ({
  image,
  title,
  position,
  link,
}) => {


  return (
    <div className="relative w-full aspect-[16/9] xl:aspect-[16/3] text-white">

      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
         style={{ objectFit: "cover", objectPosition: position }}
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent pointer-events-none" />

      {/* Content */}
      {link ? (
        <Link
          href={link}
          className="absolute bottom-6 xl:bottom-8 left-0 right-0 container mx-auto px-4 lg:px-14 hover:underline"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-bold text-3xl md:text-[3.986rem] uppercase leading-tight"
          >
            {title}
          </motion.h1>
        </Link>
      ) : (
        <div className="absolute bottom-6 xl:bottom-8 left-0 right-0 container mx-auto px-4 lg:px-14">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-bold text-3xl md:text-[3.986rem] uppercase leading-tight"
          >
            {title}
          </motion.h1>
        </div>
      )}
    </div>
  );
};