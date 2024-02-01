import { Reveal } from "../Reveal/reveal"
import { PrismaClient } from '@prisma/client'


async function getDB() {
  const prisma = new PrismaClient()
  let data = await prisma.users.findFirst()
  console.log(data);
  return data;
}

export default function About() {
  
  getDB();


  return (
    
    <main>
      <Reveal>
        <div>About</div>
      </Reveal>
    </main>
  );
}


