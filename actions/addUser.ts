"use server";

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const addUser = async(formData: FormData) => { 

    try {
        await prisma.users.create({data: {
            login: formData.get('login') as string,
            password: formData.get('password') as string,
        }
    })
    } catch (error) {
        return { error: 'Error adding user' };
    } finally {
        revalidatePath('/users');
    }
}