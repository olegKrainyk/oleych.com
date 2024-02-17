import { cookies } from "next/headers"

export async function login(formData: FormData) {
    const user = {username: formData.get ('username') as string, password: formData.get ('password') as string}

    const expires = new Date(Date.now() + 10 * 1000)
    const session = await encrypt({user, expires})

    cookies().set('session', session, { expires, httpOnly: true})

}