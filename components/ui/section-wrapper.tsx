import * as React from "react";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function SectionWrapper({
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      {...props}
      className={`custom-screen py-16 sm:pt-32 sm:pb-24  ${
        props.className || ""
      }`}
    >
      {children}
    </section>
  );
}
