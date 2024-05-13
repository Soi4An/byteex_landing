import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  direction: 't' | 'b';
}

const GradientBG: React.FC<Props> = ({ children, direction }) => {
  return direction === 't' 
  ? (
    <div className={`bg-gradient-to-t from-orange-gradient to-transparent h-full`}>
      {children}
    </div>
  ) : (
    <div className={`bg-gradient-to-b from-orange-gradient to-transparent h-full`}>
      {children}
    </div>
  );
};

export default GradientBG;
