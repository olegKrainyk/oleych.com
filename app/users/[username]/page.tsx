"use server";

import { Reveal } from "@/components/Reveal/reveal"
import UserPicture from "@/components/UserPicture/UserPicture"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export default async function User({ params }: { params: { username: string } }) {

  // await new Promise((resolve) => setTimeout(resolve, 100000))

    async function getUserData() {
    try {
        const user = await prisma.users.findUnique({
          where: {
            username: String(params.username),
          },
        });
    
        return { user };
      } catch (error) {
        console.error('Error fetching user data:', error);
        return { error: 'Error fetching user data' };
      } finally {
        revalidatePath(`/users/${params.username}`);
      }
    }

    const data = await getUserData();
   
    return (
        data.user === null || data.user === undefined ? <Reveal><>User not found</></Reveal> :
        <div>
          <Reveal>
            <>
              <UserPicture userpic={data.user.userpic} size={150} />
            </>
          </Reveal>
            <Reveal>
                <div>
                    user id: {data.user?.id}
                </div>
            </Reveal>
            <div>
                <Reveal>
                    <div>Username: {data.user?.username}</div>
                </Reveal>
                <Reveal>
                    <div>password: {data.user?.password}</div>
                </Reveal>
            </div>
        </div>
        );
}