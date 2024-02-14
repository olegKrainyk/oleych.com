"use client";

import React from "react"
import Link from "next/link"
import style from "./style.module.css"

interface NavLinkProps {
  href: string;
  text: string;
}

export default function NavLink({href, text} : NavLinkProps) {
  return (
    <Link href={href} className={style.link}>
        {text.toUpperCase()}
    </Link>
  );
}