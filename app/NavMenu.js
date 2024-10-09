import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";
import { SignInButton } from "@/components/buttons";

export default function NavMenu() {
  //
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/gallery"}>Gallery</Link>
        </li>
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
}
