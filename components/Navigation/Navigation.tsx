"use client";

import React from "react"
import Link from "next/link"
import style from "./style.module.css"

export default function Navigation() {
  return (
    <div className={style.wrapper}>
        <nav className={style.navigation}>
            <Link href="/" className={style.link}>
                Home
            </Link>
            <Link href="/about" className={style.link}>
                About
            </Link>
            <Link href="/users" className={style.link}>
                Users
            </Link>
        </nav>
    </div>
  );
}
