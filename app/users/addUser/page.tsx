import { revalidatePath } from 'next/cache'
import prisma from '../../../lib/prisma'
import SubmitBtn from '@/components/SubmitBtn/SubmitBtn'

export default async function addUser() {

  //  const ref = useRef<HTMLFormElement>(null);

    const addUser = async (formData: FormData) => { 
        "use server";
        
        await prisma.users.create({data: {
            login: formData.get('login') as string,
            password: formData.get('password') as string,
        }});

        // ref.current?.reset();

        revalidatePath('/users');
    }

    return (
      <>
      <form action={addUser}>
        <div>
        <label>
          Login:
          <input type="text" name="login" required />
        </label>
        </div>
        <div>
        <label>
          Password:
          <input type="text" name="password" required/>
        </label>
        </div>
        <SubmitBtn />
      </form>
      </>
    );
  }