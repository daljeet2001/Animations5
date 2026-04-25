"use client"

import { motion } from "framer-motion";
type Variant = "primary" | "secondary" | "ghost";


export default function Button({children,variants="primary"}:{children:any,variants:Variant}){
    const base = "px-6 py-3 transition-colors rounded-xl font-medium";
    const styles = {
        primary:"bg-black text-white",
        secondary:"border border-black",
        ghost:"text-black"
    }
    return(
        <motion.button 
        className={`${base} ${styles[variants]}`}
        whileHover={{scale:1.03,y:-2}}
        whileTap={{scale:0.97}}
        transition={{duration:0.4,ease:"easeOut"}}
        >
            {children}
        </motion.button>
    )
}