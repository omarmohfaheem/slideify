import * as React from "react";
import Link from "next/link";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  [key: string]: unknown;
}

export default function NavLink({ children, href, ...props }: NavLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      className={`py-2.5 px-4 text-center rounded-full duration-150 ${
        props?.className || ""
      }`}
    >
      {children}
    </Link>
  );
}
