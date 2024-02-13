"use server";

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const removeUser = async(formData: FormData) => { 

    try{
        const userExists = await prisma.users.findUnique({
            where: {
                id: Number(formData.get('id')),
            }
        })
        if(userExists != null) {
            try {
                await prisma.users.delete({where: 
                    {id: Number(formData.get('id')),
                }})
            } catch (error) {
                return { error: 'Error removing user' }
            } finally {
                revalidatePath('/users')
            }
        } else {
            return { error: "User doesn't exit, use valid id" }
        }
    } catch (error) {
        return { error: 'Network error' };
    } finally {
        revalidatePath('/users')
        revalidatePath('/users/removeUser')
    }
}