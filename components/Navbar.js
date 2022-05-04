import styles from "./Navbar.module.css";

import React from "react";
import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {
  return (
    <nav className={styles["nav-menu"]}>
      <ActiveLink href="/" text="Home"></ActiveLink>
      <ActiveLink href="/about" text="About"></ActiveLink>
      <ActiveLink href="/contact" text="Contact"></ActiveLink>
    </nav>
  );
};
