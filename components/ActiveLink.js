import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const style = {
  textDecoration: "underline",
  color: "blue",
  cursor: "pointer",
};

export const ActiveLink = ({ text, href }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a style={router.asPath === href ? style : null}>{text}</a>
    </Link>
  );
};
