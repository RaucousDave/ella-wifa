"use client"

import Navbar from "@/app/components/Navbar";
import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";


export default function Layout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname()
    return (

        <AnimatePresence>
            <Navbar/>
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>

    );
}
