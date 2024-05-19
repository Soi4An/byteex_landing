import { FeedbackType } from "../types/FeedbackType";
import Feedback from "./Feedback";
import "../App.css";
import StarsAndNameInCol from "./StarsAndNameInCol";

type Props = {
  comment: FeedbackType;
};

const CarouselItemComments = ({ comment }: Props) => (
  <li className="carousel__item flex flex-col items-center p-2">
    <Feedback feedback={comment}>
      <StarsAndNameInCol feedback={comment} />
    </Feedback>
  </li>
);

export default CarouselItemComments;
