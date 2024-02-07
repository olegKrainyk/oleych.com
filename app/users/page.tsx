import { RemoveUser } from "@/components/RemoveUser/RemoveUser"
import { Reveal } from "@/components/Reveal/reveal"
import { PrismaClient, users } from '@prisma/client'
import { revalidatePath } from "next/cache"
import Link from "next/link"
import prisma from '../../lib/prisma'
import style from './style.module.css'

export default async function Users({}) {
  async function fetchUsers() {
    const data = await prisma.users.findMany();
    return data;
  }

  const data = await fetchUsers();
  revalidatePath('/users');

    return (
      <div>
        <div>USERS</div>
            {data.map((user: users) => {
            return (
              <div className={style.user} key={user.id}>
              <RemoveUser id={user.id}>
                <div></div>
              </RemoveUser>
            
              <Reveal>
                <Link href={`users/${user.id}`}>{user.login} --- pass: {user.password} ---- id: {user.id}</Link>
              </Reveal>
              </div>
            );
            })}
            
            <Link href={"/users/addUser"}>Add user</Link>
            {/* <Link href={"/users/removeUser"}>Remove user</Link> */}
      </div>
    );
  }