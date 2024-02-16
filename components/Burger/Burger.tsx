"use client"

import React from 'react'
import { animate, motion } from 'framer-motion'
import style from './style.module.css'

interface Props {
    setIsOpen: (arg0: boolean) => void;
    isOpen: boolean;
}

export default function Burger({  setIsOpen, isOpen }: Props) {

    const menu_1_child_variants = {
        open: {transform: 'rotate(45deg)'},
        close: {transform: 'rotate(0deg)'}
    }
    const menu_2_child_variants = {
        open: {display: '', opacity: 0,},
        close: {display: '', opacity: 1,}
    }
    const menu_3_child_variants = {
        open: {transform: 'rotate(-45deg)'},
        close: {transform: 'rotate(0deg)'}  
    }  
    const menu_variants = {
        open: {rotate: "-360deg", transition: {duration: 0.3}},
        close: {rotate: 0, transition: {duration: 0.3}}
    }

    return (
            <motion.div onClick={() => setIsOpen(!isOpen)} className={style.burger} tabIndex={5} initial={false} animate={isOpen ? 'open' : 'close'} variants={menu_variants}>
                <motion.div animate={isOpen ? 'open' : 'close'} variants={menu_1_child_variants} className={style.stripes}></motion.div>
                <motion.div animate={isOpen ? 'open' : 'close'} variants={menu_2_child_variants} className={style.stripes}></motion.div>
                <motion.div animate={isOpen ? 'open' : 'close'} variants={menu_3_child_variants} className={style.stripes}></motion.div>
            </motion.div>
    )
}