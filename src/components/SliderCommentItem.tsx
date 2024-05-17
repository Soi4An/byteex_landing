import { FeedbackType } from "../types/FeedbackType";
import Feedback from "./Feedback";
import "../App.css";
import StarsAndNameInCol from "./StarsAndNameInCol";

type Props = {
  comment: FeedbackType;
};

const SliderCommentItem = ({ comment }: Props) => (
  <div className="carousel__item flex flex-col items-center p-2">
    <Feedback feedback={comment}>
      <StarsAndNameInCol feedback={comment} />
    </Feedback>
  </div>
);

export default SliderCommentItem;
