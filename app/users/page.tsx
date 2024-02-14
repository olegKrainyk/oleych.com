import { Suspense } from "react"
import Loading from "./loading"
import UsersList from "@/components/UsersList/UsersList"

export default async function Users({}) {

    return (
      <div>
        <div>USERS</div>

        <Suspense fallback={<Loading />}>
            <UsersList />
        </Suspense>

      </div>
    );
  }