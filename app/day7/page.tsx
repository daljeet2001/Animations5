"use client"
import { SuccessCheck } from "../components/SuccessCheck"
import Circle from "../components/Circle"
import { motion } from "framer-motion"
import { FaBell } from "react-icons/fa"

export default function Page(){
    return(
        <div className="flex items-center bg-white justify-center h-screen">
            {/* <SuccessCheck/> */}
            <Circle/>

            {/* <motion.div 
            initial={{width:"0"}}
            animate={{width:"100%"}}
            transition={{duration:0.5}}
            className="h-[2px] bg-black">
            </motion.div> */}


            {/* <motion.div 
            animate={{y:[0,-3,0]}}
            transition={{repeat:Infinity, duration:1.2}}
            > 
            <FaBell color="black" size={18}/>

            </motion.div> */}



            

        </div>
    )
}