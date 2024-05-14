import "../App.css";
import { ListItemFull } from "../types/ListItemFull";
import SliderOrderItem from "./SliderOrderItem";

type Props = {
  points: ListItemFull[];
};

const SliderOrderList = ({ points }: Props) => (
  <div className="h-full overflow-hidden carousel__outside-box">
    <div className="flex w-max">
      {points.map((point, ind) => (
        <SliderOrderItem key={`Order-${ind}`} point={point} index={ind}/>
      ))}
    </div>
  </div>
);

export default SliderOrderList;
