import { revalidatePath } from "next/cache";
import { Reveal } from "../../components/Reveal/reveal"
import { PrismaClient } from '@prisma/client'

export default async function About() {
  
  const prisma = new PrismaClient()
  const data = await prisma.users.findMany()

  return (
    
    <main>
      <Reveal>
        <>
        <div>About</div>
        
        </>
      </Reveal>

      <Reveal>
        <>
        {data.map((user: any) => {
          return <div key={user.id}>{user.login} --- pass: {user.password}</div>
        })
        }
        </>
      </Reveal>
    </main>
  );
}


