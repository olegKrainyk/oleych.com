"use server";

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import Link from "next/link"
import style from './style.module.css'
import { users } from "@prisma/client"
import { RemoveUser } from "../RemoveUser/RemoveUser"
import UserPicture from "../UserPicture/UserPicture"
import { Reveal } from "../Reveal/reveal"

export default async function UsersList({}) {

    await new Promise((resolve) => setTimeout(resolve, 1000))

    async function getUserData() {
        try {
            const data = await prisma.users.findMany()
            return data
        } catch (error) {
            console.error('Error fetching user data:', error)
            const data:any = null
            return data
        }
        finally {
            revalidatePath('/users')
        }
    }
    
    const data = await getUserData();  

    return (
        data === null || data === undefined ? <div className={style.notfound}><Reveal><div className={style.notfoundtext}>Error loading users</div></Reveal></div> :
            <>
                {data.map((user: users) => {
                    return (
                        <div className={style.wrapper} key={user.id}>
                        <RemoveUser id={user.id}>
                            <></>
                        </RemoveUser>
                    
                        <Reveal>
                        <div className={style.user}>
                            <Link href={`/${user.username}`}>
                            <UserPicture userpic={user.userpic} size={50} />
                            </Link>
        
                            <div className={style.info}>id: {user.id} ---- {user.username}</div>
                        </div>
                        </Reveal>
                        </div>
                );})}
            </>
    );
}