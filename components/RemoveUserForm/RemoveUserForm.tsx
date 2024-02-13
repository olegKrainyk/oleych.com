"use client";

import React from "react"
import SubmitBtn from "../SubmitBtn/SubmitBtn"
import { removeUser } from '@/actions/removeUser'
import { useRef } from 'react'
import style from '../AddUserForm/style.module.css'

export default function RemoveUserForm() {

  const ref = useRef<HTMLFormElement>(null)
  const [response, setResponse] = React.useState<string | null>('')

  const handleSubmit = async (formData: FormData) => {
    await removeUser(formData).then((res) => {
      if (res?.error) {
       setResponse(res.error?.toString())
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
          id:
          <input type="text" name="id" />
        </label>
        </div>

        <div className={style.submit}>
              <SubmitBtn text='Remove' class='btn'/>
              <div className={style.response}>{response}</div>
        </div>
      </form>
    )
}