import { Reveal } from "@/components/Reveal/reveal"
import { PrismaClient, users } from '@prisma/client'
import Link from "next/link";

export default async function Users({}) {
    const prisma = new PrismaClient()
    const data = await prisma.users.findMany()

    return (
      <main>
        
        <>
            {data.map((user: users) => {
            return (<Reveal key={user.id}>
                <div >{user.login} --- pass: {user.password}</div>
                </Reveal>);
            })
            }
            
            <Link href={"/users/addUser"}>Add user</Link>
                
        </>

      </main>
    );
  }