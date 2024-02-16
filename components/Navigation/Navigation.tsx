"use client";

import React from "react"
import style from "./style.module.css"
import { motion } from "framer-motion"
import Burger from "../Burger/Burger"
import NavLink from "./NavLink/NavLink"

export default function Navigation() {

    const [isOpen, setIsOpen] = React.useState(false)

    const variants = {
        active: {
            x: '0',
            width: '300px',
            rotate: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeIn",
            },
        },
        closed: {
            x: "130%",
            width: "0px",
            rotate: 50,
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeIn",
            },
        },
    }

  return (
    <div className={ isOpen ? `${style.wrapperblur}`: `''`}>
        <div className={style.wrapperbig}>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
            <motion.div animate={isOpen ? 'active' : 'closed'} initial={false} variants={variants} className={style.wrapper}>
                <nav className={style.navigation}>
                    <NavLink href="/" text="Home" handleClick={() => setIsOpen(false)}/>
                    <NavLink href="/users" text="Users" handleClick={() => setIsOpen(false)} />
                    <NavLink href="/users/addUser" text="Add" handleClick={() => setIsOpen(false)} />
                    <NavLink href="/users/removeUser" text="Remove" handleClick={() => setIsOpen(false)} />
                </nav>
            </motion.div>
        </div>
    </div>
  );
}