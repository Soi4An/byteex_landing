import "../App.css";
import { FeedbackType } from "../types/FeedbackType";
import SliderCommentItem from "./SliderCommentItem";

type Props = {
  comments: FeedbackType[];
};

const SliderCommentsList = ({ comments }: Props) => (
  <ul className="h-full overflow-hidden carousel__outside-box">
    <li className="flex w-max">
      {comments.map((comment, ind) => (
        <SliderCommentItem key={`Comment-${ind}`} comment={comment} />
      ))}
    </li>
  </ul>
);

export default SliderCommentsList;
