import { FeedbackType } from "../types/FeedbackType";
import Feedback from "./Feedback";
import "../App.css";

type Props = {
  comment: FeedbackType;
};

const SliderCommentItem = ({ comment }: Props) => (
    <div className="carousel__item flex flex-col items-center p-2">
      <Feedback feedback={comment} />
    </div>
  );

export default SliderCommentItem;
