import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  direction: 't' | 'b';
}

const GradientBG: React.FC<Props> = ({ children, direction }) => {
  return (
    <div className={`bg-gradient-to-${direction} from-orange-bg to-transparent h-full`}>
      {children}
    </div>
  );
};

export default GradientBG;
