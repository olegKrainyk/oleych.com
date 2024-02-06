import { RemoveUser } from "@/components/RemoveUser/RemoveUser";
import { Reveal } from "@/components/Reveal/reveal"
import { PrismaClient, users } from '@prisma/client'
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default async function Users({}) {
  
    const prisma = new PrismaClient()
    const data = await prisma.users.findMany()
    revalidatePath('/users');

    return (
      <main>  
            {data.map((user: users) => {
            return (
            
              <Reveal key={user.id}>
                <div >{user.login} --- pass: {user.password} ---- id: {user.id}</div>
              </Reveal>
            );
            })}
            
            <Link href={"/users/addUser"}>Add user</Link>
            <Link href={"/users/removeUser"}>Remove user</Link>
      </main>
    );
  }