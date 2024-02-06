import { RemoveUser } from "@/components/RemoveUser/RemoveUser";
import { Reveal } from "@/components/Reveal/reveal"
import { PrismaClient, users } from '@prisma/client'
import { revalidatePath } from "next/cache";
import Link from "next/link"
import prisma from '../../lib/prisma'


export default async function Users({}) {
  async function fetchUsers() {
    const data = await prisma.users.findMany();
    
    return data;
  }

  const data = await fetchUsers();
  revalidatePath('/users');
    

    return (
      <main>  
            {data.map((user: users) => {
            return (

              <>
              <RemoveUser id={user.id}>
                <div></div>
              </RemoveUser>
            
              <Reveal key={user.id}>
                <div >{user.login} --- pass: {user.password} ---- id: {user.id}</div>
              </Reveal>
              </>
            );
            })}
            
            <Link href={"/users/addUser"}>Add user</Link>
            <Link href={"/users/removeUser"}>Remove user</Link>
      </main>
    );
  }