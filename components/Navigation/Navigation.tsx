"use client";

import React from "react"
import Link from "next/link"
import style from "./style.module.css"
import { motion } from "framer-motion"

export default function Navigation() {

    const [isOpen, setIsOpen] = React.useState(false)

    const variants = {
        active: {
            x: '0',
            width: '150px',
            transition: {
                duration: 0.2,
                ease: "easeIn",
            },
        },
        closed: {
            x: "100%",
            width: "0",
            transition: {
                duration: 0.2,
                ease: "easeIn",
            },
        },
    }

  return (
    <div className={style.wrapperbig}>
        <div onClick={() => setIsOpen(!isOpen)} className={style.btn}>
                &#10006;
        </div>
        <motion.div animate={isOpen ? 'active' : 'closed'} initial={false} variants={variants} className={style.wrapper}>

            <nav className={style.navigation}>
                <Link href="/" className={style.link}>
                    Home
                </Link>
                <Link href="/users" className={style.link}>
                    Users
                </Link>
                <Link href="/users/addUser" className={style.link}>
                    Add User
                </Link>
            </nav>
        </motion.div>
    </div>
  );
}
