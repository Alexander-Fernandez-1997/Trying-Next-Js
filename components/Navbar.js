import styles from "./Navbar.module.css";

import React from "react";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles["nav-menu"]}>
      {menuItems.map((item) => (
        <ActiveLink key={item.text} href={item.href} text={item.text} />
      ))}
    </nav>
  );
};
