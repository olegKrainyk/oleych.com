"use server";

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
        data.user === null ? <div>User not found</div> :
        <main>
            <h1>User</h1>
            <div>
            <h2>{data.user.login}</h2>
            <p>id: {data.user.id}</p>
            <p>password: {data.user.password}</p>
            </div>
        </main>
        );
}