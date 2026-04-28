"use client"
import Loader from "../components/Loader";
import PageLoader from "../components/PageLoader";
import { useState, useEffect } from "react";
import CardSkeleton from "../components/CardSkeleton";
import Input from "../components/Input";
import { motion, AnimatePresence } from "framer-motion"
import { SuccessCheck } from "../components/SuccessCheck";
export default function Page() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(true), 2000)
    }, [])

    return (
        <div className="h-screen bg-white flex items-center justify-center">
            {/* <Loader/> */}
            {/* <PageLoader loading = {loading}/>
            Hi john */}
            {/* <CardSkeleton/> */}
            {/* <Input/> */}

            <AnimatePresence>
                {loading === true && (<motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 1 }} transition={{ duration: 0.3 }} className="flex items-center">

                    <SuccessCheck />

                </motion.div>)}
            </AnimatePresence>

        </div>
    )
}