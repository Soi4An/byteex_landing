import "../App.css";
import { FeedbackType } from "../types/FeedbackType";
import SliderCommentItem from "./SliderCommentItem";

type Props = {
  comments: FeedbackType[];
};

const SliderCommentsList = ({ comments }: Props) => (
  <div className="h-full overflow-hidden carousel__outside-box">
    <ul className="flex w-max">
      {comments.map((comment, ind) => (
        <SliderCommentItem key={`Comment-${ind}`} comment={comment} />
      ))}
    </ul>
  </div>
);

export default SliderCommentsList;
