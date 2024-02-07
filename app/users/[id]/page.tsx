"use server";

import { Reveal } from "@/components/Reveal/reveal";
import prisma from "@/lib/prisma";
import { users } from "@prisma/client"
import { revalidatePath } from "next/cache"

export default async function User({ params }: { params: { id: number } }) {

    async function getUserData() {
    try {
        const user = await prisma.users.findUnique({
          where: {
            id: Number(params.id),
          },
        });
    
        return { user };
      } catch (error) {
        console.error('Error fetching user data:', error);
        return { error: 'Error fetching user data' };
      } finally {
        revalidatePath(`/users/${params.id}`);
      }
    }

    const data = await getUserData();
   
    return (
        data.user === null ? <Reveal><>User not found</></Reveal> :
        <div>
            <Reveal>
                <div>
                    user id: {data.user.id}
                </div>
            </Reveal>
            <div>
                <Reveal>
                    <div>login: {data.user.login}</div>
                </Reveal>
                <Reveal>
                    <div>password: {data.user.password}</div>
                </Reveal>
            </div>
        </div>
        );
}