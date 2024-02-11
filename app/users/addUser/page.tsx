import { revalidatePath } from 'next/cache'
import prisma from '../../../lib/prisma'
import AddUserForm from '@/components/AddUserForm/AddUserForm'
import { Suspense } from 'react'
import Loading from './loading'

export default async function addUser() {

    return (
      <>
      <Suspense fallback={<Loading />}>
        <AddUserForm />
      </Suspense>
      </>
    );
  }