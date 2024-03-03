import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutComp = ({ children }: LayoutProps) => (
  <section className="w-full h-full flex justify-center items-center ">{children}</section>
);

export default LayoutComp;