"use client"

import { motion } from "framer-motion";
 
export default function Circle(){
    return(
<svg width="50" height="50">
  <motion.circle
    cx="25"
    cy="25"
    r="20"
    stroke="black"
    strokeWidth="3"
    fill="transparent"
    strokeDasharray="100"
    strokeDashoffset="100"
    animate={{ strokeDashoffset: 0 }}
    transition={{
      repeat: Infinity,
      duration: 1,
      ease: "linear"
    }}
  />
</svg>
       
    )
}