"use client"
import { AnimatePresence,motion } from "framer-motion"; 

export default function PageLoader({loading}:{loading:boolean}){
    return(
        <AnimatePresence>
            {loading && (
                             <motion.div className="fixed inset-0 flex items-center justify-center z-50" initial={{opacity:1}} exit={{opacity:0}} transition={{duration:0.4}}>

                <div className="animate-pulse text-black">Loading</div>

        </motion.div>

            )}
 

        </AnimatePresence>
      
    )
}