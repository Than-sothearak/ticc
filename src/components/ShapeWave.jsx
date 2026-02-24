import React from 'react'
import { motion } from "framer-motion";
const ShapeWave = () => {
  return (
    <div>
        {/* Wave Shape at Bottom */}
<motion.div
  className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-10"
  initial={{ y: 50 }}
  animate={{ y: [0, 20, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
>
  <svg
    className="relative block w-[200%] h-40"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
      fill="rgba(59, 130, 246, 0.3)" // blue with opacity
    ></path>
    <path
      d="M0,0 C400,100 800,0 1200,100 L1200,120 L0,120 Z"
      fill="rgba(59, 130, 246, 0.5)"
    ></path>
    <path
      d="M0,0 C500,80 700,0 1200,80 L1200,120 L0,120 Z"
      fill="rgba(59, 130, 246, 0.7)"
    ></path>
  </svg>
</motion.div>

    </div>
  )
}

export default ShapeWave