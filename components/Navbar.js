import React from "react";
import Link from "next/link";
import styles from "../app/page.module.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              About
            </Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
