import Link from "next/link";
import React, { HTMLAttributes, ReactNode } from "react";

interface ButtonTypes extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  path: string;
}

const Button = ({ children, path, ...props }: ButtonTypes) => {
  return (
    <Link passHref href={path}>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default Button;
