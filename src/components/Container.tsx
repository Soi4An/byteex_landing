import React, { ReactNode } from "react";

interface ContainerProps {
  extraClasses?: string;
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ extraClasses, children }) => {
  return (
    <div
      className={`container mx-auto px-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl ${extraClasses}`}
    >
      {children}
    </div>
  );
};

export default Container;
