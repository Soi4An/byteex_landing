import { FeedbackType } from "../types/FeedbackType";
import Stars from "./Stars";

type Props = {
  feedback: FeedbackType;
};

const Feedback = ({ feedback }: Props) => {
  const { autorImg, autorName, rating, ratingText, message } = feedback;
  
  return (
    <div className="py-4 px-3 md:px-4 border rounded bg-white border-gray-bg-light shadow-lg">
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10 rounded-full">
          <img className="object-cover" src={autorImg} alt={"avatar"} />
        </div>

        <div className="flex gap-x-2 flex-col xl:flex-row-reverse justify-between w-full">
          <Stars rating={rating} text={ratingText} starWidth={'10px'} />
          <p className="text-sm font-semibold">{autorName}</p>
        </div>
      </div>

      <p className="font-comment text-sm mt-3">{message}</p>
    </div>
  );
};

export default Feedback;
