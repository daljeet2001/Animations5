"use client"

import { motion } from "framer-motion";


export default function Loader(){
    return(
        <motion.div className="w-6 h-6 rounded-full border-2 border-neutral-300 border-t-black" 
        animate={{rotate:360}} 
        transition={{
            repeat:Infinity,
            duration:1,
            ease:"linear"
        }}>

        </motion.div>
    )
}