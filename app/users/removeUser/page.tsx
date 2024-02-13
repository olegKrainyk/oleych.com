
import { Suspense } from 'react'
import Loading from './loading'
import RemoveUserForm from '@/components/RemoveUserForm/RemoveUserForm'

export default async function removeUser() {
    
    return (
      <div>
        <div>Remove USER</div>

        <div>
          <Suspense fallback={<Loading />}>
            <RemoveUserForm />
          </Suspense>
        </div>

      </div>
    );
  }