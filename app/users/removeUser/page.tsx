import { revalidatePath } from 'next/cache'
import prisma from '../../../lib/prisma'
import { Suspense } from 'react'
import Loading from './loading'

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
      <Suspense fallback={<Loading />}>
      <form action={removeUser}>
        <div>
        <label>
          id:
          <input type="text" name="id" />
        </label>
        </div>
        <button type="submit">Remove user</button>
      </form>
      </Suspense>
      </>
    );
  }