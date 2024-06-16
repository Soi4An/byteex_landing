import { ReactNode } from "react";
import { FeedbackType } from "../types/FeedbackType";
import Stars from "./Stars";

type Props = {
  feedback: FeedbackType;
  children: ReactNode;
};

const Feedback = ({ feedback, children }: Props) => {
  const { autorImg, message } = feedback;

  return (
    <div className="py-4 px-3 md:px-4 border rounded bg-white border-gray-bg-light shadow-lg">
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10">
          <img
            className="object-cover rounded-full"
            src={autorImg}
            alt={"avatar"}
          />
        </div>

        {children}
      </div>

      <p className="font-comment text-sm mt-3">{message}</p>
    </div>
  );
};

export default Feedback;
