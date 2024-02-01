import Link from "next/link";
import { Reveal } from "../components/Reveal/reveal";

export default function Home() {

  return (
    <main>
      <Reveal>
        <>
          <div>oleych.com</div>
          <Link href={"/about"}>About</Link>
          <Link href={"/users"}>Users</Link>
        </>
      </Reveal>
    </main>
  );
}