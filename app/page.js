import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";
import Monk from "../../first-next-app/Images/monk.png";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <nav>
          <ul className={styles.navbar}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <h1>Hello there this is my first nextJs blog site</h1>
        <a href="#">Coding Monks</a>
        <Image src={Monk} height={300} alt="Logo of the site" />
      </main>
    </div>
  );
}
