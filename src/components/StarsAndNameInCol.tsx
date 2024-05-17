import { FeedbackType } from "../types/FeedbackType";
import Stars from "./Stars";

type Props = {
  feedback: FeedbackType;
};
const StarsAndNameInCol = ({ feedback }: Props) => {
  const { autorName, rating, ratingText } = feedback;

  return (
    <div className="flex gap-x-2 flex-col w-full">
      <Stars rating={rating} text={ratingText} starWidth={"10px"} />
      <p className="text-sm font-semibold">{autorName}</p>
    </div>
  );
};

export default StarsAndNameInCol;
