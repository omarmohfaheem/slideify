import * as React from "react";

interface GradientWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function GradientWrapper({
  children,
  ...props
}: GradientWrapperProps) {
  return (
    <div
      {...props}
      className={`relative overflow-hidden ${props.className || ""}`}
    >
      <div
        className="blur-[100px] absolute inset-0 w-full h-full bg-blue-50"
        // style={{
        //   background:
        //     "linear-gradient(202.72deg, rgba(0, 123, 255, 0.05) 14.76%, rgba(0, 82, 204, 0.04) 34.37%, rgba(0, 82, 204, 0) 86.62%)",
        // }}
      ></div>
      <div className="relative">{children}</div>
    </div>
  );
}
