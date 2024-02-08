"use client";

import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
        Add user
    </button>
  );

}