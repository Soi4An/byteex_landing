import React, { ReactNode } from 'react';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={`container mx-auto px-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl ${className}`}>
      {children}
    </div>
  );
};

export default Container;
