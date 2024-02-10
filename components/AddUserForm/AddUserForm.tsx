"use client";

import React from "react"
import SubmitBtn from "../SubmitBtn/SubmitBtn"
import { addUser } from "@/actions/addUser"
import { useRef } from 'react'

export default function AddUserForm() {

  const ref = useRef<HTMLFormElement>(null)

  const handleSubmit = async (formData: FormData) => {
    await addUser(formData)
    ref.current?.reset()
  }

    return (
        <form ref={ref} action={handleSubmit}>
            <div>
            <label>
              Username:
              <input type="text" name="username" required />
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