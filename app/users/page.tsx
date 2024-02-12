import { RemoveUser } from "@/components/RemoveUser/RemoveUser"
import { Reveal } from "@/components/Reveal/reveal"
import { PrismaClient, users } from '@prisma/client'
import { revalidatePath } from "next/cache"
import Link from "next/link"
import prisma from '../../lib/prisma'
import style from './style.module.css'
import Image from "next/image"
import UserPicture from "@/components/UserPicture/UserPicture"
import { Suspense } from "react"
import Loading from "./loading"

export default async function Users({}) {

  // await new Promise((resolve) => setTimeout(resolve, 1000));
    async function getUserData() {
        try {
          const data = await prisma.users.findMany();
          return data;
        } catch (error) {
          console.error('Error fetching user data:', error);
          const data: users[] = [{id: 0, username: 'error', userpic: 1, password: 'error'}];
          return data;
        }
        finally {
          revalidatePath('/users');
        }
    }

    const data = await getUserData();

    return (
      <div>
        <div>USERS</div>
        <Suspense fallback={<Loading />}>

          {data.map((user: users) => {
              return (
                <div className={style.wrapper} key={user.id}>
                <RemoveUser id={user.id}>
                  <div></div>
                </RemoveUser>
              
                <Reveal>
                  <div className={style.user}>
                    <Link href={`users/${user.username}`}>
                      <UserPicture userpic={user.userpic} size={50} />
                    </Link>

                    <div className={style.info}>id: {user.id} ---- {user.username}</div>
                  </div>
                </Reveal>
                </div>
            );
            })}
        </Suspense>

            <Link href={"/users/addUser"}>Add user</Link>
      </div>
    );
  }