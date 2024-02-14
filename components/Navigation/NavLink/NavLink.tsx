"use client";

import React from "react"
import Link from "next/link"
import style from "./style.module.css"
import { handleClientScriptLoad } from "next/script";

interface NavLinkProps {
  href: string;
  text: string;
  handleClick: () => void;
}

export default function NavLink({href, text, handleClick} : NavLinkProps) {
  return (
    <Link href={href} className={style.link} onClick={handleClick}>
        {text.toUpperCase()}
    </Link>
  );
}