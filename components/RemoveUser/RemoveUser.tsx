import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import React from "react"

    interface Props {
        children: JSX.Element;
        id: number;
    }

    export const RemoveUser = ({ children, id}: Props) => {

        const removeUser = async () => { 
            "use server";
    
            try {
                await prisma.users.delete({where: 
                    {id: Number(id),
                }}
                );
            
              }catch (error) {
                
                return { error: 'Error deleting user' };
              } finally {
                revalidatePath('/users');
              }
        } 

        return (
            <form action={removeUser}>
                <input type="hidden" name="id" value={id} />
                {children}
                <button type="submit">-</button>
            </form>
        );
}