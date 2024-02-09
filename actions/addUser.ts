"use server";

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const addUser = async(formData: FormData) => { 
    
    const userpicn: number = Math.floor(Math.random() * 9) + 1

    try {
        await prisma.users.create({data: {
            login: formData.get('login') as string,
            password: formData.get('password') as string,
            userpic: userpicn,
        }
    })
    } catch (error) {
        return { error: 'Error adding user' };
    } finally {
        revalidatePath('/users');
    }
}