"use client"
import { motion } from "framer-motion";

export function SuccessCheck() {
  return (
    <svg width="50" height="50" viewBox="0 0 24 24">
      <motion.path
        d="M5 13l4 4L19 7"
        fill="transparent"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </svg>
  );
}