import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import React from "react"
import SubmitBtn from "../SubmitBtn/SubmitBtn"
import style from "./style.module.css"

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
            <form action={removeUser} className={style.formwrapper}>
                <input type="hidden" name="id" value={id} />
                {children}
                <SubmitBtn text="" class="redminus" />
            </form>
        );
}