"use client"


import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

export default function PremiumButton({children}:{children:any}){
    return(
       <motion.button
       className="px-6 py-3 bg-black text-white flex items-center gap-2 hover:bg-neutral-800 rounded-xl"
       whileHover="hover"
       initial="rest"
       whileTap="tap"
       variants={{
        rest:{},
        tap:{scale:0.97},
        hover:{scale:1.03,y:-2}
       }}
               transition={{duration:0.4,ease:"easeOut"}}
       >
        <motion.span>{children}</motion.span>
        <motion.span
         variants={{rest:{x:0,opacity:0.7},hover:{x:4,opacity:1},tap:{x:2}}} 
         transition={{duration:0.3,ease:"easeOut"}}
         ><GoArrowUpRight size={14}/></motion.span>

       </motion.button>

    )
}