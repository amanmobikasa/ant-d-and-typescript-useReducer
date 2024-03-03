import React from 'react';

interface HeadingProps {
  title?: string;
  size?: "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
}

const Heading = ({ title, size }: HeadingProps) => {
  return (
    <h1 className={`text-${size} font-normal`}>{title}</h1>
  );
}

export default Heading;
