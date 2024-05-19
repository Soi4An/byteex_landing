import "../App.css";
import { TitleTextIcon } from "../types/TitleTextIcon";
import SliderOrderItem from "./SliderOrderItem";

type Props = {
  points: TitleTextIcon[];
};

const SliderOrderList = ({ points }: Props) => (
  <ul className="h-full overflow-hidden carousel__outside-box">
    <li className="flex w-max">
      {points.map((point, ind) => (
        <SliderOrderItem key={`Order-${ind}`} point={point} index={ind} />
      ))}
    </li>
  </ul>
);

export default SliderOrderList;
