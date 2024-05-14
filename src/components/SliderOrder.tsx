import { ListItemFull } from "../types/ListItemFull";
import RoundButton from "./RoundButton";

import arrowRight from "../images/icons/arrow_right.svg";
import arrowLeft from "../images/icons/arrow_left.svg";
import { useCallback } from "react";
import SliderOrderList from "./SliderOrderList";

type Props = {
  points: ListItemFull[];
};

const SliderOrder = ({ points }: Props) => {
  // const screenWidth = window.innerWidth;
  // const [currentPoints, seCurrentpoints] = useState([]);
  const handleMoveRight = useCallback(() => {}, []);
  const handleMoveLeft = useCallback(() => {}, []);

  return (
    <div className="flex justify-between xl:justify-center items-center h-full w-full">
      <div className="xl:hidden">
        <RoundButton
          icon={arrowLeft}
          iconWidth={"20px"}
          clickHendler={handleMoveLeft}
        />
      </div>

      <SliderOrderList points={points} />

      <div className="xl:hidden">
        <RoundButton
          icon={arrowRight}
          iconWidth={"20px"}
          clickHendler={handleMoveRight}
        />
      </div>
    </div>
  );
};

export default SliderOrder;
