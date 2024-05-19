import "../App.css";
import { TitleTextIcon } from "../types/TitleTextIcon";
import CarouselItemOdrers from "./CarouselItemOdrers";

type Props = {
  points: TitleTextIcon[];
  movedRight: number;
};

const CarouselListOrder = ({ points, movedRight }: Props) => (
  <div className="h-full overflow-hidden carousel__outside-box">
    <ul
      className="flex w-max transform-transition"
      style={{
        transform: `translateX(${movedRight}px)`,
      }}
    >
      {points.map((point, ind) => (
        <CarouselItemOdrers key={`Order-${ind}`} point={point} index={ind} />
      ))}
    </ul>
  </div>
);

export default CarouselListOrder;
