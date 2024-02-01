import { revalidatePath } from 'next/cache';
import prisma from '../../../lib/prisma'

export default async function addUser() {

    const addUser = async (formData: FormData) => { 
        "use server";

        await prisma.users.create({data: {
            login: formData.get('login') as string,
            password: formData.get('password') as string,
        }});

        revalidatePath('/users');
    }

    return (
      <>
      <form action={addUser}>
        <label>
          Login:
          <input type="text" name="login" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <button type="submit">Add user</button>
      </form>
      </>
    );
  }