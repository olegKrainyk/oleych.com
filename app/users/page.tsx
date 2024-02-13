import { RemoveUser } from "@/components/RemoveUser/RemoveUser"
import { Reveal } from "@/components/Reveal/reveal"
import { users } from '@prisma/client'
import { revalidatePath } from "next/cache"
import Link from "next/link"
import prisma from '../../lib/prisma'
import style from './style.module.css'
import UserPicture from "@/components/UserPicture/UserPicture"
import { Suspense } from "react"
import Loading from "./loading"
import UsersList from "@/components/UsersList/UsersList"

export default async function Users({}) {

    return (
      <div>
        <div>USERS</div>

        <Suspense fallback={<Loading />}>
            <UsersList />
        </Suspense>

        {/* <Link href={"/users/addUser"}>Add user</Link> */}
      </div>
    );
  }