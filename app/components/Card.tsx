"use client"
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Cardx() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(e:React.MouseEvent<HTMLDivElement>){

        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
    }
    return (
        <motion.div initial="rest" whileHover="hover" variants={{ rest: { scale: 1, y: 0 }, hover: { scale: 1.03, y: -6 } }} whileTap={{scale:0.99}} transition={{ duration: 0.4, ease: "easeOut" }} className="cursor-pointer p-6 h-50 w-full rounded-2xl border border-neutral-200 bg-black overflow-hidden hover:shadow-xl transition-shadow duration-300 relative" onMouseMove={handleMouseMove}>

            <motion.div style={{
                background:useMotionTemplate`   radial-gradient(
              100px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.15),
              transparent 80%
            )`
            }} className="absolute inset-0 " variants={{ rest: { opacity: 0, scale: 1 }, hover: { opacity: 1, scale: 1.05 } }} transition={{ duration: 0.4 }} >
            </motion.div>


            <motion.div variants={{ rest: { opacity: 0.9, y: 0 }, hover: { opacity: 1, y: -4 } }} transition={{ duration: 0.3 }} className="relative z-10">
                <h3 className="text-lg text-white font-semibold">Title</h3>
                <p className="mt-3 text-white">Some description here</p>
                <motion.div variants={{ rest: { opacity: 0.6, x: 0 }, hover: { opacity: 1, x: 6 } }} transition={{ duration: 0.3 }} >
                    <IoIosArrowRoundForward size={18} color="white" />
                </motion.div>
            </motion.div>



        </motion.div>
    )
}