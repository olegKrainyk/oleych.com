"use client"

import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

    interface Props {
        children: JSX.Element;
        width?: "fit-content" | "100%";
    }

    export const RevealItem = ({ children, width = "fit-content" }: Props) => {
        const ref = useRef (null);
        const isInView = useInView (ref, { once: true }) ;

        const mainControls = useAnimation ();
        const slideControls = useAnimation ();

        useEffect (() => {
        if (isInView) {
            mainControls.start('visible');
            slideControls.start('visible');
        }}, [isInView]);

        return (
            <div ref={ref} style={{position: "relative", width, overflow: "hidden" }}>
            <motion.div className="reveal-motion-div"
            variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
            }}
            initial= "hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.4 }}> {children} 
            </motion.div>
            <motion.div variants={{
                hidden: { left: 0}, 
                visible: { left: "100%"},
            }}
            initial="hidden"
            animate={slideControls}
            transition={{duration: 1, ease: "easeIn" }}
            style={{
            position: "absolute", 
            top: 4,
            bottom: 4,
            height: 'auto',
            left: 0,
            right: 0, 
            background: 'white',
            zIndex: 20,
            }}
            />
            </div>
        );
}