import { revalidatePath } from 'next/cache';
import prisma from '../../../lib/prisma'

export default async function removeUser() {

    const removeUser = async (formData: FormData) => { 
        "use server";

        try {
            await prisma.users.delete({where: 
                {id: Number(formData.get('id')),
            }}
            );
        
          }catch (error) {
            
            return { error: 'Error deleting user' };
          } finally {
            revalidatePath('/users');
          }
    } 
    

    return (
      <>
      <form action={removeUser}>
        <div>
        <label>
          id:
          <input type="text" name="id" />
        </label>
        </div>
        <button type="submit">Remove user</button>
      </form>
      </>
    );
  }