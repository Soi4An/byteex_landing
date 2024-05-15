import RoundButton from "./RoundButton";

import arrowRight from "../images/icons/arrow_right.svg";
import arrowLeft from "../images/icons/arrow_left.svg";
import { ReactNode, useCallback } from "react";
import classNames from "classnames";

type Props = {
  items: any[];
  children: ReactNode;
};

const CarouselBox = ({ items, children }: Props) => {
  // const screenWidth = window.innerWidth;
  // const [currentPoints, seCurrentpoints] = useState([]);
  const handleMoveRight = useCallback(() => {}, []);
  const handleMoveLeft = useCallback(() => {}, []);

  return (
    <div className="flex justify-between xl:justify-center items-center h-full w-full">
      <div className={classNames({
        'tn:hidden': items.length === 1,
        'md:hidden': items.length === 2,
        'xl:hidden': items.length === 3,
      })}>
        <RoundButton
          icon={arrowLeft}
          iconWidth={"20px"}
          clickHendler={handleMoveLeft}
        />
      </div>

      {children}

      <div className={classNames({
        'tn:hidden': items.length === 1,
        'md:hidden': items.length === 2,
        'xl:hidden': items.length === 3,
      })}>
        <RoundButton
          icon={arrowRight}
          iconWidth={"20px"}
          clickHendler={handleMoveRight}
        />
      </div>
    </div>
  );
};

export default CarouselBox;
