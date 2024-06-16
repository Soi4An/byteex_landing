import RoundButton from "./RoundButton";

import arrowRight from "../images/icons/arrow_right.svg";
import arrowLeft from "../images/icons/arrow_left.svg";
import { ReactNode } from "react";
import classNames from "classnames";

type Props = {
  children: ReactNode;
  isHiddenedButtons: boolean;
  handlers: {
    handleMoveLeft: () => void;
    handleMoveRight: () => void;
  };
};

function CarouselButtons({ isHiddenedButtons, children, handlers }: Props) {
  const { handleMoveLeft, handleMoveRight } = handlers;

  return (
    <div
      className={classNames("flex items-center h-full w-full", {
        "justify-between": !isHiddenedButtons,
        "justify-center": isHiddenedButtons,
      })}
    >
      <div
        className={classNames({
          hidden: isHiddenedButtons,
        })}
      >
        <RoundButton
          icon={arrowLeft}
          iconWidth={"20px"}
          clickHendler={handleMoveLeft}
        />
      </div>

      {children}

      <div
        className={classNames({
          hidden: isHiddenedButtons,
        })}
      >
        <RoundButton
          icon={arrowRight}
          iconWidth={"20px"}
          clickHendler={handleMoveRight}
        />
      </div>
    </div>
  );
}

export default CarouselButtons;
