"use client";

import React from "react"
import SubmitBtn from "../SubmitBtn/SubmitBtn"
import { addUser } from "@/actions/addUser"
import { useRef } from 'react'
import { revalidatePath } from "next/cache";

export default function AddUserForm() {
  
  const ref = useRef<HTMLFormElement>(null)

  const handleSubmit = async (formData: FormData) => {
    await addUser(formData)
    ref.current?.reset()
    revalidatePath('/users');
  }

    return (
        <form ref={ref} action={handleSubmit}>
            <div>
            <label>
              Login:
              <input type="text" name="login" required />
            </label>
            </div>
            <div>
            <label>
              Password:
              <input type="text" name="password" required/>
            </label>
            </div>
            <SubmitBtn text='Add user' class='btn'/>
        </form>
    )
}