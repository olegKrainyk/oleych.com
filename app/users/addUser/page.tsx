import { revalidatePath } from 'next/cache'
import prisma from '../../../lib/prisma'
import AddUserForm from '@/components/AddUserForm/AddUserForm';

export default async function addUser() {

    return (
      <>
        <AddUserForm />
      </>
    );
  }