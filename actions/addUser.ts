"use server";

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const addUser = async(formData: FormData) => { 

    try{
        const userExists = await prisma.users.findUnique({
            where: {
                username: formData.get('username') as string,
            }
        })
        if(userExists == null) {
            const userpicn: number = Math.floor(Math.random() * 9) + 1
            try {
                await prisma.users.create({data: {
                    username: formData.get('username') as string,
                    password: formData.get('password') as string,
                    userpic: userpicn,
                }})
            } catch (error) {
                return { error: 'error :///' }
            } finally {
                revalidatePath('/users')
            }
        } else {
            return { error: 'User already exists' }
        }
    } catch (error) {
        return { error: 'error :///' };
    } finally {
        revalidatePath('/users')
        revalidatePath('/users/addUser')
    }
}