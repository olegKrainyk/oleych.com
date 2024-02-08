"use client";
import style from './style.module.css';

import { useFormStatus } from "react-dom";

interface Props {
    text: string;
    class: string;
}

export default function SubmitBtn(Props: Props) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className={Props.class === "redminus" ? style.redminus : style.btn}>
        {Props.text}
    </button>
  );

}