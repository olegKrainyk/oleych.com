"use server";

import prisma from "@/lib/prisma";

export const addUser = async(formData: FormData) => { 

    try {
        await prisma.users.create({data: {
            login: formData.get('login') as string,
            password: formData.get('password') as string,
        }
    })
    } catch (error) {
        return { error: 'Error adding user' };
    } 
}