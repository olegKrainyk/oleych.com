"use client";

import style from './style.module.css'
import Image from "next/image"


interface Props {
    userpic: number,
    size: number,
}

export default function UserPicture(Props: Props) {

  return (
    <>
        <Image className={style.userpic} src={'/userPictures/user' + Props.userpic + '.jpg'} alt='userpic' width={Props.size} height={Props.size} />
    </>
  );

}