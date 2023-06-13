import Image from "next/image";
import styles from "./page.module.css";
import Monk from "../../first-next-app/Images/monk.png";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Navbar />
        <h1>Hello there this is my first nextJs blog site</h1>
        <a href="#">Coding Monks</a>
        <Image src={Monk} height={300} alt="Logo of the site" />
      </main>
    </div>
  );
}
