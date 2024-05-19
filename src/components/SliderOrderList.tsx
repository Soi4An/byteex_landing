import "../App.css";
import { TitleTextIcon } from "../types/TitleTextIcon";
import SliderOrderItem from "./SliderOrderItem";

type Props = {
  points: TitleTextIcon[];
};

const SliderOrderList = ({ points }: Props) => (
  <div className="h-full overflow-hidden carousel__outside-box">
    <ul className="flex w-max">
      {points.map((point, ind) => (
        <SliderOrderItem key={`Order-${ind}`} point={point} index={ind} />
      ))}
    </ul>
  </div>
);

export default SliderOrderList;
