import "../App.css";
import { FeedbackType } from "../types/FeedbackType";
import CarouselItemComments from "./CarouselItemComments";

type Props = {
  comments: FeedbackType[];
  movedRight: number;
};

const CarouselListComments = ({ comments, movedRight }: Props) => (
  <div className="h-full overflow-hidden carousel__outside-box">
    <ul
      className="flex w-max transform-transition"
      style={{
        transform: `translateX(${movedRight}px)`,
      }}
    >
      {comments.map((comment, ind) => (
        <CarouselItemComments key={`Comment-${ind}`} comment={comment} />
      ))}
    </ul>
  </div>
);

export default CarouselListComments;
