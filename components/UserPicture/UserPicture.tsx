"use client";

import Image from "next/image";


interface Props {
    userpic: number;
}

export default function UserPicture(Props: Props) {

  return (
    <>
        <Image src={'/userPictures/user' + Props.userpic + '.jpg'} alt='userpic' width='50' height='50' />
    </>
  );

}