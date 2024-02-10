"use client";

import React from "react"
import SubmitBtn from "../SubmitBtn/SubmitBtn"
import { addUser } from "@/actions/addUser"
import { useRef } from 'react'
import style from './style.module.css'
import { revalidatePath } from "next/cache";

export default function AddUserForm() {

  const ref = useRef<HTMLFormElement>(null)
  const [response, setResponse] = React.useState<string | null>('')

  const handleSubmit = async (formData: FormData) => {
    await addUser(formData).then((res) => {
      if (res?.error) {
       setResponse(res.error)
      } else {
        setResponse('')
        ref.current?.reset()
      }
    })
    
  }

    return (
        <form ref={ref} action={handleSubmit}>
            <div>
            <label>
              Username:
              <input type="text" name="username" maxLength={20} minLength={5} required />
            </label>
            </div>
            <div>
            <label>
              Password:
              <input type="text" name="password" maxLength={30} minLength={8} required/>
            </label>
            </div>
            <div className={style.submit}>
              <SubmitBtn text='Add user' class='btn'/>
              <div className={style.response}>{response}</div>
            </div>
        </form>
    )
}